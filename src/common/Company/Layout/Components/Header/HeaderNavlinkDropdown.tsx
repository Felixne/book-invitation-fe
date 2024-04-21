import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { HOME_PATH } from "@constants/routeConstant";
import useSelector from "@hooks/useSelector";
import { DropdownTypeEnum } from "@enums/commonEnum";

interface HeaderNavlinkDropdownProps {
  className?: string;
  type: DropdownTypeEnum;
}

const HeaderNavlinkDropdown = ({ className, type }: HeaderNavlinkDropdownProps) => {
  const { t } = useTranslation();
  const categories = useSelector((state) => state.common.categories);
  return (
    <div className={twMerge("relative h-fit inline-block text-left", className)}>
      {type === DropdownTypeEnum.ABSOLUTE && (
        <div className="group">
          <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.PRODUCT}>
            {t("product")}
          </Link>
          <div
            className={twMerge(
              "absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300",
            )}
          >
            <div className="py-1">
              {categories.map((item) => (
                <Link key={item.uuid} to={`${HOME_PATH.PRODUCT}?filter.name=${item.name}`}>
                  <div className="block px-4 py-2 text-sm hover:text-primary-700 hover:bg-primary-100">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {type === DropdownTypeEnum.BLOCK && (
        <div className="group">
          <div className="cursor-pointer duration-75 hover:text-primary-700">{t("product")}</div>
          <div className={twMerge("w-full mt-1")}>
            <div className="py-1 w-full h-fit">
              {categories.map((item) => (
                <Link key={item.uuid} to={`${HOME_PATH.PRODUCT}?filter.name=${item.name}`}>
                  <div className="block h-fit text-black px-4 py-2 text-sm hover:text-primary-700 hover:bg-primary-100">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(HeaderNavlinkDropdown);
