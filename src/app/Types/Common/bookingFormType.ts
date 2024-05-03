import { BaseDataType, Nullable } from "./commonType";

export interface BookingFormDataType extends BaseDataType {
  bride: String;
  groom: String;
  bride_family_address: String;
  groom_family_address: String;
  bride_father_name: String;
  bride_mother_name: String;
  groom_father_name: String;
  groom_mother_name: String;
  wedding_date: String;
  party_date: String;
  party_name_place: String;
  party_address: String;
}

export interface BookingFormFormDataType extends Nullable<Partial<BookingFormDataType>> {}
