import { TFunction } from "i18next";
import { object, string } from "yup";

const bookingFormSchema = (t: TFunction) =>
  object().shape({
    bride: string().required(t("brideRequired") ?? ""),
    groom: string().required(t("groomRequired") ?? ""),
    bride_family_address: string().required(t("brideFamilyAddressRequired") ?? ""),
    groom_family_address: string().required(t("groomFamilyAddressRequired") ?? ""),
    bride_father_name: string().required(t("brideFatherNameRequired") ?? ""),
    bride_mother_name: string().required(t("brideMotherNameRequired") ?? ""),
    groom_father_name: string().required(t("groomFatherNameRequired") ?? ""),
    groom_mother_name: string().required(t("groomMotherNameRequired") ?? ""),
    wedding_date: string().required(t("weddingDateRequired") ?? ""),
    party_date: string().required(t("partyDateRequired") ?? ""),
    party_name_place: string().required(t("partyNamePlaceRequired") ?? ""),
    party_address: string().required(t("partyAddressRequired") ?? ""),
  });

export { bookingFormSchema };
