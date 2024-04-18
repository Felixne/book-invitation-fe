import { memo, useCallback, useState } from "react";
import { IoCloseOutline, IoInformationOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

import useConfig from "@hooks/useConfig";
import { ConfigKeyEnum } from "@enums/configEnum";

import { SocialIcon } from "..";

const Info = () => {
  const getConfig = useConfig();
  const [isShowContact, setIsShowContact] = useState(false);
  const handleShowContact = useCallback(() => setIsShowContact((prev) => !prev), []);
  return (
    <div className="w-12 h-12 z-50 fixed  border-2 border-gray-100 bg-primary-200 text-slate-700 xs:bottom-1/3 xs:right-4 md:bottom-6 md:right-6 rounded-full shadow-md">
      <div className="flex w-full h-full relative items-center justify-center">
        <div role="button" tabIndex={0} onClick={handleShowContact}>
          {isShowContact ? <IoCloseOutline size={28} /> : <IoInformationOutline size={28} />}
        </div>
        <div
          className={twMerge(
            "h-fit absolute bottom-full pb-2 left-0 flex w-12 flex-wrap gap-y-2",
            !isShowContact && "hidden",
          )}
        >
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
      </div>
    </div>
  );
};
export default memo(Info);
