import "animate.css";

import { MouseEvent, memo, useCallback, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import { ConfigKeyEnum } from "@enums/configEnum";
import useConfig from "@hooks/useConfig";
import useSelector from "@hooks/useSelector";
import { Logo } from "@components/Logo";
import { HOME_PATH } from "@constants/routeConstant";

const PopUp = () => {
  const { t } = useTranslation();
  const config = useConfig();
  const description = config(ConfigKeyEnum.APP_DESCRIPTION);
  const appName = config(ConfigKeyEnum.APP_NAME);
  const categories = useSelector((state) => state.common.categories);
  const [isShowPopUp, setIsShowPopUp] = useState(true);

  const handleClose = useCallback(() => {
    setIsShowPopUp(false);
  }, []);

  const handleStopPropagation = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClose}
      className={twMerge(
        "w-screen animate__animated animate__fadeInDownBig h-screen md:px-0 xs:px-4 fixed flex items-center justify-center inset-0 z-50 bg-black bg-opacity-70 duration-75",
        !isShowPopUp && "hidden",
      )}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleStopPropagation}
        className="xs:w-full md:w-160 h-fit p-8 bg-white rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div className="h-fit w-auto text-center text-xl font-semibold">
            {t("wellcomeToApp", { appName })}
          </div>
          <div
            className="flex items-center justify-center rounded-full border-2 border-gray-100 bg-gray-50 p-1 duration-75 hover:cursor-pointer hover:border-gray-200 hover:bg-gray-100"
            role="button"
            tabIndex={0}
            onClick={handleClose}
          >
            <IoClose size={16} />
          </div>
        </div>
        <div className="py-4 grid grid-cols-2 gap-x-3">
          <div className="col-span-1 xs:hidden md:flex justify-center items-center">
            <div>
              <div className="w-full flex justify-center">
                <Logo imageClassName="h-full" className="h-28 w-28" />
              </div>
              <div className="text-center py-2">{description}</div>
            </div>
          </div>
          <div className="xs:col-span-1 md:col-span-1">
            {categories?.map((item) => (
              <Link key={item.uuid} to={`${HOME_PATH.PRODUCT}?filter=filter.category_uuid=${item.uuid}`}>
                <div className="w-full h-fit py-2 hover:text-primary-500 hover:translate-x-2 items-center flex gap-x-4 text-lg">
                  <IoIosArrowForward /> <span className="font-semibold">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(PopUp);
