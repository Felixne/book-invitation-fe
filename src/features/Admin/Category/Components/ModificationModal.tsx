import { AxiosError } from "axios";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { omit } from "lodash";

import { Input, Select } from "@components/Form";
import { Modal } from "@components/Modal";
import { ModalProps } from "@components/Modal/interface";
import useToast from "@hooks/useToast";
import { setFormError } from "@utils/Helpers/errorHelper";
import { CategoryDataType, CategoryFormDataType } from "@interfaces/Common/categoryType";
import { getCateroriesAccessById } from "@services/App/categoryService";

interface AdminCategoryModificationModalProps extends ModalProps {
  category: CategoryDataType | null;
  onCreate: (category: CategoryFormDataType) => Promise<void>;
  onCreated: () => void;
  onEdit: (id: number, category: CategoryFormDataType) => Promise<void>;
  onEdited: () => void;
}

const DEFAULT_VALUE: CategoryFormDataType = {
  name: "",
  description: "",
};

const AdminCategoryModificationModal = ({
  isOpen,
  category,
  onClose,
  onCreate,
  onCreated,
  onEdit,
  onEdited,
  ...props
}: AdminCategoryModificationModalProps) => {
  const { t } = useTranslation();
  const toast = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState<CategoryDataType[]>([]);

  const handleUnknownError = useCallback(() => {
    toast.error(t("unknown"));
  }, [t, toast]);

  const {
    control,
    reset,
    handleSubmit: useFormSubmit,
    ...methods
  } = useForm<CategoryFormDataType>({
    // resolver: yupResolver(adminUserModificationFormSchema(t)),
    defaultValues: DEFAULT_VALUE,
  });

  const handleCreateCategory = useCallback(
    async (formData: CategoryFormDataType) => {
      try {
        await onCreate(omit(formData, "parent_uuid"));
        toast.success(t("addCategorySuccessfully"));
        onCreated();
        onClose();
      } catch (error) {
        if (error instanceof AxiosError) {
          setFormError(error, methods.setError, null, handleUnknownError);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [handleUnknownError, methods.setError, onClose, onCreate, onCreated, t, toast],
  );

  const handleEditCategory = useCallback(
    async (formData: CategoryFormDataType) => {
      if (!category) return;
      try {
        await onEdit(category.uuid as number, formData);
        toast.success(t("editCategorySuccessfully"));
        onEdited();
        onClose();
      } catch (error) {
        if (error instanceof AxiosError) {
          setFormError(error, methods.setError, null, handleUnknownError);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [handleUnknownError, methods.setError, onClose, onEdit, onEdited, t, toast, category],
  );

  const handleSubmit = useFormSubmit(async (formData) => {
    setIsSubmitting(true);

    if (!category) {
      handleCreateCategory(formData);
      return;
    }

    handleEditCategory(formData);
  });

  const fetchData = useCallback(async (idCategory: number) => {
    try {
      const { data } = await getCateroriesAccessById(idCategory);
      setCategoryData(data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsSubmitting(false);

    if (category) {
      fetchData(category.uuid);
      reset(category);
      return;
    }

    reset(DEFAULT_VALUE);
  }, [isOpen, reset, category, fetchData]);

  const categoryOption = useMemo(
    () => categoryData.map((item) => ({ value: item.uuid, label: item.name })),
    [categoryData],
  );

  return (
    <Modal
      isLoading={isSubmitting}
      isOpen={isOpen}
      isFormModal
      title={category ? t("editCategory") : t("addCategory")}
      onClose={onClose}
      onConfirm={handleSubmit}
      {...props}
    >
      <Input
        className="block w-full"
        control={control}
        disabled={isSubmitting}
        label={t("name")}
        name="name"
      />
      <Input
        className="block w-full"
        control={control}
        disabled={isSubmitting}
        label={t("description")}
        name="description"
      />
      {category && (
        <Select
          isDisabled={isLoading}
          name="parent_uuid"
          className="w-full"
          control={control}
          options={categoryOption}
          placeholder={t("category")}
        />
      )}
    </Modal>
  );
};

export default memo(AdminCategoryModificationModal);
