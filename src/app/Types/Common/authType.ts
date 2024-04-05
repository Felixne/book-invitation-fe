import { UserDataType } from "./userType";

export interface AuthTokenType {
  token: string;
}

export interface AuthLoginFormDataType {
  email: string;
  password: string;
}

export interface AuthRegisterFormDataType extends Pick<UserDataType, "email"> {
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
  isAcceptedTerms: boolean;
}

export interface AuthForgetPasswordFormDataType {
  email: string;
}

export interface AuthResetPasswordFormDataType {
  password: string;
  password_confirmation: string;
  otp: string;
}

export interface AuthFormGeneralError {
  code: string;
  message: string;
}
