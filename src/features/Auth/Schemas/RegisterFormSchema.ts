import { TFunction } from "i18next";
import { boolean, ref, string } from "yup";

import { AuthRegisterFormDataType } from "@interfaces/Common";
import { generateFormSchema } from "@utils/Helpers/commonHelper";

const registerFormSchema = (t: TFunction) =>
  generateFormSchema<AuthRegisterFormDataType>({
    first_name: string().required(t("firstNameRequired") ?? ""),
    last_name: string().required(t("firstNameRequired") ?? ""),
    email: string()
      .email(t("emailInvalid") ?? "")
      .required(t("emailRequired") ?? ""),
    password: string().required(t("passwordRequired") ?? ""),
    password_confirmation: string()
      .oneOf([ref("password")], t("passwordConfirmationNotMatch") ?? "")
      .required(t("passwordConfirmationRequired") ?? ""),
    isAcceptedTerms: boolean(),
  });

export { registerFormSchema };
