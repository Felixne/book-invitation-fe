import { TFunction } from "i18next";
import { object, string } from "yup";

const billingAddressFormSchema = (t: TFunction) =>
  object().shape({
    name: string().required(t("nameRequired") ?? ""),
    phone: string().required(t("phoneRequired") ?? ""),
    city: string().required(t("cityRequired") ?? ""),
    district: string().required(t("districtRequired") ?? ""),
    ward: string().required(t("wardRequired") ?? ""),
    address: string().required(t("addressRequired") ?? ""),
    note: string(),
  });

export { billingAddressFormSchema };
