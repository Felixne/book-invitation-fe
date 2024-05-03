import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { AxiosError } from "axios";

import { Input } from "@components/Form";
import { LoadingSkeleton } from "@components/Loading";
import { Button } from "@components/Button";
import { createBooking } from "@services/App/bookingFormService";
import useToast from "@hooks/useToast";
import { setFormError } from "@utils/Helpers/errorHelper";
import { BookingFormFormDataType } from "@interfaces/Common/bookingFormType";

const OrderBookingForm = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    reset,
    handleSubmit: useFormSubmit,
    watch,
    ...methods
  } = useForm<BookingFormFormDataType>({
    // resolver: yupResolver(adminUserModificationFormSchema(t)),
  });

  const handleUnknownError = useCallback(() => {
    toast.error(t("unknown"));
  }, [t, toast]);

  const handleSubmit = useFormSubmit(async (formData: BookingFormFormDataType) => {
    try {
      await createBooking(formData);
      toast.success(t("addInfomationSuccessfully"));
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormError(error, methods.setError, null, handleUnknownError);
      }
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="w-full h-fit hidden rounded-lg mt-6 p-6 border-2 border-gray-100">
      <div className="w-fit xs:text-lg md:text-xl h-fit mb-8 font-semibold relative before:w-full before:h-0.5 before:absolute before:bg-gray-50 before:rounded-full before:-bottom-1 before:left-0">
        {t("information")}
      </div>
      <FormProvider reset={reset} control={control} handleSubmit={useFormSubmit} watch={watch} {...methods}>
        <form onSubmit={handleSubmit} className="w-full h-fit  grid grid-cols-3 gap-6 ">
          <LoadingSkeleton className="col-span-1 rounded-lg" />
          <div className="col-span-1 flex flex-wrap gap-6">
            <Input control={control} className="block w-full" label={t("nameBride")} name="bride" />
            <Input
              control={control}
              className="block w-full"
              label={t("brideFatherName")}
              name="bride_father_name"
            />
            <Input
              control={control}
              className="block w-full"
              label={t("brideMotherName")}
              name="bride_mother_name"
            />
            <Input
              control={control}
              className="block w-full"
              label={t("brideFamilyAddress")}
              name="bride_family_address"
            />
            <Input
              control={control}
              type="date"
              className="block w-full"
              label={t("weddingDate")}
              name="wedding_date"
            />
            <Input
              control={control}
              type="date"
              className="block w-full"
              label={t("partyDate")}
              name="party_date"
            />
          </div>
          <div className="col-span-1 flex flex-wrap gap-6">
            <Input control={control} className="block w-full" label={t("nameGroom")} name="groom" />
            <Input
              control={control}
              className="block w-full"
              label={t("groomFatherName")}
              name="groom_father_name"
            />
            <Input
              control={control}
              className="block w-full"
              label={t("groomMotherName")}
              name="groom_mother_name"
            />
            <Input
              control={control}
              className="block w-full"
              label={t("groomFamilyAddress")}
              name="groom_family_address"
            />
            <Input
              control={control}
              className="block w-full"
              label={t("partyNameplace")}
              name="party_name_place"
            />
            <Input
              control={control}
              className="block w-full"
              label={t("partyAddress")}
              name="party_address"
            />
          </div>
          <div className="flex col-span-3 justify-end items-center pt-6 gap-x-6">
            <Button color="light" className="w-fit h-10">
              {t("clear")}
            </Button>
            <Button type="submit" isLoading={isSubmitting} className="w-fit h-10">
              {t("placeOrder")}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default memo(OrderBookingForm);
