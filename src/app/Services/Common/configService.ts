import { CONFIG_API_PATH } from "@constants/apiConstant";
import { ConfigTypeEnum } from "@enums/configEnum";
import { BaseListQueryType, ConfigDataType, ConfigFormDataType, ResponseDataType } from "@interfaces/Common";
import { axiosInstance } from "@utils/Axios";

const fakeConfigData: ConfigDataType[] = [
  {
    uuid: 1,
    key: "site-description",
    value: "De Mariarge website for invation card",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 2,
    key: "footer-facebook",
    value: "https://www.facebook.com",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 3,
    key: "footer-twitter",
    value: "https://www.twitter.com",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 4,
    key: "footer-instagram",
    value: "https://www.instagram.com",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 10,
    key: "footer-linkedin",
    value: "https://www.linkedin.com",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 11,
    key: "footer-phone",
    value: "099999999",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 12,
    key: "footer-email",
    value: "contact@gmail.com",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 4,
    key: "site-name",
    value: "De Mariarge",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 6,
    key: "cover-image-default",
    value: "https://thietkekhainguyen.com/wp-content/uploads/2022/10/thiep-cuoi-trong-suot-788x445.jpg",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 3,
    key: "site-logo",
    value: "https://media.techupcorp.com/agolf-system/public/img/c0V4RoBF7USpNOA-FullLogo_Transparent.png",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 24,
    key: "site-icon",
    value: "https://media.techupcorp.com/agolf-system/public/img/gbnBKg67sMYUOtA-agolf-favo-icon.png",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 26,
    key: "pagination-trigger-percent",
    value: "70",
    type: ConfigTypeEnum.PUBLIC,
  },
  {
    uuid: 25,
    key: "pagination-page-size",
    value: "60",
    type: ConfigTypeEnum.PUBLIC,
  },
];

const getPublicConfigs = async (): Promise<ConfigDataType[]> => {
  return Promise.resolve(fakeConfigData);
};

const getConfigs = async (params?: BaseListQueryType): Promise<ResponseDataType<ConfigDataType[]>> => {
  const response = await axiosInstance.get(CONFIG_API_PATH.CONFIGS, { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};

const createConfig = async (data: ConfigFormDataType) => {
  await axiosInstance.post(CONFIG_API_PATH.CONFIG, data);
};

const editConfig = async (id: number, data: ConfigFormDataType) => {
  await axiosInstance.put(CONFIG_API_PATH.CONFIG_ID(id), data);
};

const deleteConfig = async (id: number) => {
  await axiosInstance.delete(CONFIG_API_PATH.CONFIG_ID(id));
};

export { getPublicConfigs, getConfigs, createConfig, editConfig, deleteConfig };
