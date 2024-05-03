import { MY_BILLING_ADDRESS_API_PATH } from "@constants/apiConstant";
import { BaseListQueryType, ResponseDataType } from "@interfaces/Common";
import { BillingAddressDataType, BillingAddressFormDataType } from "@interfaces/Common/billingAddressType";
import { axiosInstance } from "@utils/Axios";

const getBillingAddresses = async (
  params?: BaseListQueryType,
): Promise<ResponseDataType<BillingAddressDataType[]>> => {
  const response = await axiosInstance.get(MY_BILLING_ADDRESS_API_PATH.BILLING_ADDRESSES, { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};
const createBillingAddress = async (data: BillingAddressFormDataType) => {
  await axiosInstance.post(MY_BILLING_ADDRESS_API_PATH.BILLING_ADDRESS, data);
};
const editBillingAddress = async (id: number, data: BillingAddressFormDataType) => {
  await axiosInstance.put(MY_BILLING_ADDRESS_API_PATH.BILLING_ADDRESS_ID(id), data);
};
const deleteBillingAddress = async (id: number) => {
  await axiosInstance.delete(MY_BILLING_ADDRESS_API_PATH.BILLING_ADDRESS_ID(id));
};

export { getBillingAddresses, createBillingAddress, editBillingAddress, deleteBillingAddress };
