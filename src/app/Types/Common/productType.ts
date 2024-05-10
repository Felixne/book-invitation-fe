import { CategoryDataType } from "./categoryType";
import { BaseDataType, Nullable } from "./commonType";

export interface ProductDataType extends BaseDataType {
  name: string;
  price: string | number;
  image: string;
  description: string;
  category_uuid: number;
  category: CategoryDataType;
  detail_images?: string[];
}

export interface ProductFormDataType extends Nullable<Partial<ProductDataType>> {}
