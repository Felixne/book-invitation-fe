import "animate.css";

import { memo } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import { ConfigKeyEnum } from "@enums/configEnum";
import useSelector from "@hooks/useSelector";
import { Logo } from "@components/Logo";
import { HOME_PATH } from "@constants/routeConstant";
import { commonSelector } from "@selectors/index";

const WellcomePage = () => {
  const { t } = useTranslation();
  const config = useSelector(commonSelector.configSelector);
  const categories = useSelector((state) => state.common.categories);

  return (
    <div
      className={twMerge(
        "w-screen h-screen md:px-0 xs:px-4 fixed flex items-center justify-center inset-0 z-50 bg-white text-green-700 duration-75",
      )}
    >
      <div className="xs:w-full md:w-160">
        <div className="w-full h-fit p-8 ">
          <div className="h-fit w-full mb-6 text-center xs:text-xl md:text-4xl font-semibold">
            {t("wellcomeToApp", { appName: config[ConfigKeyEnum.APP_NAME] })}
          </div>
          <div className="py-4 grid grid-cols-2 md:gap-3 xs:gap-6">
            <div className="xs:col-span-2 md:col-span-1 flex justify-center items-center">
              <div>
                <div className="w-full flex justify-center">
                  <Logo imageClassName="h-full" className="h-28 w-28" />
                </div>
                <div className="text-center py-2">{config[ConfigKeyEnum.APP_DESCRIPTION] as string}</div>
              </div>
            </div>
            <div className="xs:col-span-2 md:p-0 xs:p-4 md:col-span-1 ">
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
        <div className="w-full h-10">
          <div className="w-full h-fit text-center font-bold text-4xl">
            {config[ConfigKeyEnum.COMPANY_NAME] as string}
          </div>
          <div className="w-full h-fit text-center pt-2">{config[ConfigKeyEnum.ADDRESS] as string}</div>
          <div className="w-full h-fit text-center">
            {t("emailContact", { emailContact: config[ConfigKeyEnum.EMAIL] as string })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(WellcomePage);
