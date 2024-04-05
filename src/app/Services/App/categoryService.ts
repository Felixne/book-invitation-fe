import { axiosInstance } from "@utils/Axios";
import { CATEGORY_API_PATH } from "@constants/apiConstant";

import { CategoryDataType } from "../../Types/Common/categoryType";
import { BaseListQueryType, ResponseDataType } from "../../Types/Common/commonType";

const getCaterories = async (params?: BaseListQueryType): Promise<ResponseDataType<CategoryDataType[]>> => {
  const response = await axiosInstance.get(CATEGORY_API_PATH.CATEGORIES, { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};
export { getCaterories };
