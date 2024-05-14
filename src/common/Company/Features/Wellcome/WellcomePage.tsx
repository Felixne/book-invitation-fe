import "animate.css";

import { memo } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Trans, useTranslation } from "react-i18next";
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
    <div className={twMerge("w-screen h-screen fixed  inset-0 z-50 bg-white text-green-700 duration-75")}>
      <div className="flex  items-center justify-center w-full h-full relative">
        <div className="xs:w-full md:w-160 md:px-0 xs:px-4">
          <div className="w-full h-fit">
            <div className="h-fit w-full text-center xs:text-xl md:text-4xl font-semibold">
              <Trans
                t={t}
                i18nKey="wellcomeToApp"
                values={{ appName: config[ConfigKeyEnum.APP_NAME] }}
                components={{
                  bold: <strong className="text-[#28166F]" />,
                  italic: <i />,
                }}
              />
            </div>
            <div className="py-6 grid grid-cols-2 md:gap-3 xs:gap-6">
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
            <div className="w-full h-fit text-center">
              {t("phoneNumber", { phoneNumber: config[ConfigKeyEnum.PHONE_NUMBER] as string })}
            </div>
          </div>
        </div>
        <img
          className="z-[-5] absolute top-0 left-0 w-full h-full object-cover"
          src={config[ConfigKeyEnum.WELLCOME_PAGE_BG_IMAGE] as string}
          alt="wellcome-bg"
        />
      </div>
    </div>
  );
};
export default memo(WellcomePage);
