import { axiosInstance } from "@utils/Axios";
import { CATEGORY_API_PATH } from "@constants/apiConstant";

import { CategoryDataType, CategoryFormDataType } from "../../Types/Common/categoryType";
import { BaseListQueryType, ResponseDataType } from "../../Types/Common/commonType";

const getCaterories = async (params?: BaseListQueryType): Promise<ResponseDataType<CategoryDataType[]>> => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORIES, { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};
const createCategory = async (data: CategoryFormDataType) => {
  await axiosInstance.post(CATEGORY_API_PATH.CATEGORY, data);
};
const editCategory = async (id: number, data: CategoryFormDataType) => {
  await axiosInstance.put(CATEGORY_API_PATH.CATEGORY_ID(id), data);
};
const deleteCategory = async (id: number) => {
  await axiosInstance.delete(CATEGORY_API_PATH.CATEGORY_ID(id));
};

export { getCaterories, createCategory, editCategory, deleteCategory };
