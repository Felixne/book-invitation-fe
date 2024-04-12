import { BaseDataType } from "./commonType";
import { ProductDataType } from "./productType";

export interface CartDataType {
  product_uuid: number;
  quantity: number;
}

export interface CartFormDataType {
  product: Array<CartDataType>;
}

export interface ProductInCartDataType {
  uuid: number;
  product_uuid: number;
  quantity: number;
  sub_total: string;
  product?: ProductDataType;
}

export interface CartsDataType extends BaseDataType {
  user_uuid: number;
  products: Array<ProductInCartDataType>;
}
