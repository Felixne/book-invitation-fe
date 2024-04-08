import { BaseDataType, Nullable } from "./commonType";

export interface CategoryDataType extends BaseDataType {
  name: string;
  description: string;
}

export interface CategoryFormDataType extends Nullable<Partial<CategoryDataType>> {}
