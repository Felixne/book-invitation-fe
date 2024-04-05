import { PRODUCT_API_PATH } from "@constants/apiConstant";
import { BaseListQueryType, ResponseDataType } from "@interfaces/Common";
import { ProductDataType } from "@interfaces/Common/productType";
import { axiosInstance } from "@utils/Axios";

const getProducts = async (params?: BaseListQueryType): Promise<ResponseDataType<ProductDataType[]>> => {
  const response = await axiosInstance.get(PRODUCT_API_PATH.PRODUCTS, { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};

const getProductById = async (id: number): Promise<ProductDataType> => {
  const response = await axiosInstance.get(PRODUCT_API_PATH.PRODUCT_ID(id));
  return response.data.data;
};

export { getProducts, getProductById };
