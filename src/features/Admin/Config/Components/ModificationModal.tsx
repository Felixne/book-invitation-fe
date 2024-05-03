import { AxiosError } from "axios";
import { memo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { values } from "lodash";

import { Input, Select } from "@components/Form";
import { Modal } from "@components/Modal";
import { ModalProps } from "@components/Modal/interface";
import useToast from "@hooks/useToast";
import { setFormError } from "@utils/Helpers/errorHelper";
import { ConfigDataType, ConfigFormDataType } from "@interfaces/Common";
import { ConfigDataTypeEnum, ConfigTypeEnum } from "@enums/configEnum";

import ValueConfigInput from "./ValueConfigInput";

interface AdminConfigModificationModalProps extends ModalProps {
  config: ConfigDataType | null;
  onCreate: (config: ConfigFormDataType) => Promise<void>;
  onCreated: () => void;
  onEdit: (id: number, config: ConfigFormDataType) => Promise<void>;
  onEdited: () => void;
}

const DEFAULT_VALUE: ConfigFormDataType = {
  value: null,
  key: "",
  type: ConfigTypeEnum.PUBLIC,
  description: "",
  datatype: ConfigDataTypeEnum.TEXT,
};

const AdminConfigModificationModal = ({
  isOpen,
  config,
  onClose,
  onCreate,
  onCreated,
  onEdit,
  onEdited,
  ...props
}: AdminConfigModificationModalProps) => {
  const { t } = useTranslation();
  const toast = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUnknownError = useCallback(() => {
    toast.error(t("unknown"));
  }, [t, toast]);

  const {
    control,
    reset,
    handleSubmit: useFormSubmit,
    watch,
    ...methods
  } = useForm<ConfigFormDataType>({
    // resolver: yupResolver(adminUserModificationFormSchema(t)),
    defaultValues: DEFAULT_VALUE,
  });

  const handleCreateConfig = useCallback(
    async (formData: ConfigFormDataType) => {
      try {
        await onCreate(formData);
        toast.success(t("addConfigSuccessfully"));
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

  const handleEditConfig = useCallback(
    async (formData: ConfigFormDataType) => {
      if (!config) return;
      try {
        await onEdit(config.uuid as number, formData);
        toast.success(t("editConfigSuccessfully"));
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
    [handleUnknownError, methods.setError, onClose, onEdit, onEdited, t, toast, config],
  );

  const handleSubmit = useFormSubmit(async (formData) => {
    setIsSubmitting(true);
    let formatFormData = {};
    if (formData.datatype === ConfigDataTypeEnum.IMAGES) {
      formatFormData = { ...formData, value: [formData.value] };
    } else {
      formatFormData = formData;
    }

    if (!config) {
      handleCreateConfig(formatFormData);

      return;
    }

    handleEditConfig(formData);
  });

  const configDataTypeOptions = values(ConfigDataTypeEnum).map((item) => ({
    label: item,
    value: item,
  }));

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsSubmitting(false);

    if (config) {
      reset(config);
      return;
    }

    reset(DEFAULT_VALUE);
  }, [isOpen, reset, config]);

  // const selectedType = useMemo(() => getValues("datatype"), [getValues]);

  return (
    <Modal
      isLoading={isSubmitting}
      isOpen={isOpen}
      isFormModal
      title={config ? t("editConfig") : t("addConfig")}
      onClose={onClose}
      onConfirm={handleSubmit}
      {...props}
    >
      <Input className="block w-full" control={control} disabled={isSubmitting} label={t("key")} name="key" />
      <Input
        className="block w-full"
        control={control}
        disabled={isSubmitting}
        label={t("description")}
        name="description"
      />
      <Select
        isDisabled={isSubmitting}
        name="datatype"
        className="w-full"
        control={control}
        options={configDataTypeOptions}
        placeholder={t("datatype")}
      />
      <ValueConfigInput type={watch("datatype")} control={control} isSubmitting={isSubmitting} />
    </Modal>
  );
};

export default memo(AdminConfigModificationModal);
