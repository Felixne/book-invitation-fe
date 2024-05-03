import { BaseDataType, Nullable } from "./commonType";

export interface CategoryDataType extends BaseDataType {
  name: string;
  description: string;
  children_category?: CategoryDataType[];
}

export interface CategoryFormDataType extends Nullable<Partial<CategoryDataType>> {}
