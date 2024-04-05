import { CategoryDataType } from "./categoryType";
import { BaseDataType } from "./commonType";

export interface ProductDataType extends BaseDataType {
  name: string;
  price: string | number;
  image: string;
  description: string;
  category_uuid: number;
  category: CategoryDataType;
}
