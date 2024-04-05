import { axiosInstance } from "@utils/Axios";
import { BaseListQueryType, UserFormDataType } from "@interfaces/Common";

import { USER_API_PATH } from "../../Constants/apiConstant";

const getUsers = async (params?: BaseListQueryType) => {
  const response = await axiosInstance.get(USER_API_PATH.USERS, { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};

const createUser = async (data: UserFormDataType) =>
  new Promise<UserFormDataType>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

const updateUserById = async (id: number, data: UserFormDataType) =>
  new Promise<UserFormDataType>((resolve) => {
    setTimeout(() => {
      resolve({ ...data, uuid: id });
    }, 1000);
  });

export { createUser, getUsers, updateUserById };
