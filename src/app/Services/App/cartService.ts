import { CART_API_PATH } from "@constants/apiConstant";
import { BaseListQueryType } from "@interfaces/Common";
import { CartsDataType } from "@interfaces/Common/cartType";
import { axiosInstance } from "@utils/Axios";

import { CartFormDataType } from "../../Types/Common/cartType";

const getCarts = async (params?: BaseListQueryType): Promise<CartsDataType> => {
  const response = await axiosInstance.get(CART_API_PATH.CARTS, { params });
  return response.data.data;
};

const addCart = async (data: CartFormDataType) => {
  await axiosInstance.post(CART_API_PATH.CART, data);
};

const deleteCart = async (id: number) => {
  await axiosInstance.delete(CART_API_PATH.CART_ID(id));
};

export { getCarts, addCart, deleteCart };
