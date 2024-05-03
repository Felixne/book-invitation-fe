import { BaseDataType, Nullable } from "./commonType";

export interface BillingAddressDataType extends BaseDataType {
  user_uuid: number;
  name: String;
  phone: String;
  city: String;
  district: String;
  ward: String;
  address: String;
  note: String;
}

export interface BillingAddressFormDataType extends Nullable<Partial<BillingAddressDataType>> {}
