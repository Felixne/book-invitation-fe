import { AxiosError } from "axios";
import { memo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Input } from "@components/Form";
import { Modal } from "@components/Modal";
import { ModalProps } from "@components/Modal/interface";
import useToast from "@hooks/useToast";
import { setFormError } from "@utils/Helpers/errorHelper";
import { BillingAddressDataType, BillingAddressFormDataType } from "@interfaces/Common/billingAddressType";

interface ModificationDeliveryModalProps extends ModalProps {
  billingAddress: BillingAddressDataType;
  onCreate: (billingAddress: BillingAddressFormDataType) => Promise<void>;
  onCreated: () => void;
  onEdit: (id: number, billingAddress: BillingAddressFormDataType) => Promise<void>;
  onEdited: () => void;
}

const DEFAULT_VALUE: BillingAddressFormDataType = {
  name: "",
  address: "",
  city: "",
  district: "",
  note: "",
  phone: "",
  ward: "",
};

const ModificationDeliveryModal = ({
  isOpen,
  billingAddress,
  onClose,
  onCreate,
  onCreated,
  onEdit,
  onEdited,
  ...props
}: ModificationDeliveryModalProps) => {
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
    ...methods
  } = useForm<BillingAddressFormDataType>({
    // resolver: yupResolver(adminUserModificationFormSchema(t)),
    defaultValues: DEFAULT_VALUE,
  });

  const handleCreate = useCallback(
    async (formData: BillingAddressFormDataType) => {
      try {
        await onCreate(formData);
        toast.success(t("addBillingAddressSuccessfully"));
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

  const handleEdit = useCallback(
    async (formData: BillingAddressFormDataType) => {
      if (!billingAddress) return;
      try {
        await onEdit(billingAddress.uuid as number, formData);
        toast.success(t("editBillingAddressSuccessfully"));
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
    [handleUnknownError, methods.setError, onClose, onEdit, onEdited, t, toast, billingAddress],
  );

  const handleSubmit = useFormSubmit(async (formData) => {
    setIsSubmitting(true);

    if (!billingAddress) {
      handleCreate(formData);

      return;
    }

    handleEdit(formData);
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsSubmitting(false);

    if (billingAddress) {
      reset(billingAddress);
      return;
    }

    reset(DEFAULT_VALUE);
  }, [isOpen, reset, billingAddress]);

  return (
    <Modal
      isLoading={isSubmitting}
      isOpen={isOpen}
      isFormModal
      title={billingAddress ? t("editBillingAddress") : t("addBillingAddress")}
      onClose={onClose}
      onConfirm={handleSubmit}
      childrenClassName="grid grid-cols-2 gap-6 w-128"
      {...props}
    >
      <div className="col-span-1 flex gap-6 flex-wrap">
        <Input
          control={control}
          disabled={isSubmitting}
          className="block w-full"
          label={t("name")}
          name="name"
        />
        <Input
          control={control}
          disabled={isSubmitting}
          className="block w-full"
          label={t("phone")}
          name="phone"
        />
        <Input
          control={control}
          disabled={isSubmitting}
          className="block w-full"
          label={t("city")}
          name="city"
        />
      </div>
      <div className="col-span-1 flex gap-6 flex-wrap">
        <Input
          control={control}
          disabled={isSubmitting}
          className="block w-full"
          label={t("district")}
          name="district"
        />
        <Input
          control={control}
          disabled={isSubmitting}
          className="block w-full"
          label={t("ward")}
          name="ward"
        />
        <Input
          control={control}
          disabled={isSubmitting}
          className="block w-full"
          label={t("address")}
          name="address"
        />
      </div>
      <Input
        control={control}
        disabled={isSubmitting}
        className="block col-span-2"
        label={t("note")}
        name="note"
      />
    </Modal>
  );
};

export default memo(ModificationDeliveryModal);
