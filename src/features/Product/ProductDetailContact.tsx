import { memo } from "react";
import { useTranslation } from "react-i18next";

import { ConfigKeyEnum } from "@enums/configEnum";
import useConfig from "@hooks/useConfig";
import { SocialIcon } from "@components/SocialIcon";

const ProductDetailContact = () => {
  const { t } = useTranslation();
  const getConfig = useConfig();
  return (
    <div className="w-full h-fit">
      <div className="font-semibold uppercase">{t("contact")}</div>
      <div className="w-fit my-2 h-10 flex gap-4 justify-start">
        <a href={`tel:${getConfig(ConfigKeyEnum.PHONE_NUMBER)}`} target="_blank" rel="noreferrer">
          <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-gray-100 bg-white text-green-600 shadow-md duration-200 hover:bg-green-600 hover:text-white">
            <SocialIcon hostname="phone" size={20} />
          </div>
        </a>
        <a href={`mailto:${getConfig(ConfigKeyEnum.EMAIL)}`} target="_blank" rel="noreferrer">
          <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-gray-100 bg-white text-primary-500 shadow-md duration-200 hover:bg-primary-500 hover:text-white">
            <SocialIcon hostname="email" size={20} />
          </div>
        </a>
        <a href={getConfig(ConfigKeyEnum.URL_FACEBOOK)} target="_blank" rel="noreferrer">
          <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-gray-100 bg-white text-blue-500 shadow-md duration-200 hover:bg-blue-500 hover:text-white">
            <SocialIcon hostname="facebook" size={20} />
          </div>
        </a>
        <a href={getConfig(ConfigKeyEnum.URL_ADDRESS)} target="_blank" rel="noreferrer">
          <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-gray-100 bg-white text-blue-500 shadow-md duration-200 hover:bg-blue-500 hover:text-white">
            <SocialIcon hostname="address" size={20} />
          </div>
        </a>
      </div>
    </div>
  );
};
export default memo(ProductDetailContact);
