import { memo } from "react";

import { ConfigKeyEnum } from "../../../../../app/Enums";
import { SocialIcon } from "../../../Components";
import { useConfig } from "../../../Hooks";

interface FooterSocialIconProps {
  className?: string;
}

const FooterSocialIcon = ({ className }: FooterSocialIconProps) => {
  const getConfig = useConfig();

  return (
    <div className={className}>
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
    </div>
  );
};

export default memo(FooterSocialIcon);
