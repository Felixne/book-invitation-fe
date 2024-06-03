import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { isEmpty } from "lodash";

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
        <div className="group-one">
          <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.PRODUCT}>
            {t("category")}
          </Link>
          <div
            className={twMerge(
              "absolute left-0 top-6 w-40 origin-top-left  opacity-0 invisible group-one-hover:opacity-100 group-one-hover:visible transition duration-300",
            )}
          >
            <div className="bg-white divide-y divide-gray-100 rounded-sm shadow-sm border border-gray-100">
              <div className="py-1">
                {categories.map((item) => (
                  <Link
                    className="group-two relative"
                    key={item.uuid}
                    to={`${HOME_PATH.PRODUCT}?filter=filter.category_include_children=${item.uuid}`}
                  >
                    <div className="block z-10 px-4 py-2 text-sm hover:text-primary-700 hover:bg-primary-100">
                      {item.name}
                    </div>
                    <div
                      className={twMerge(
                        "z-20 absolute  w-40  hidden group-two-hover:block bg-white divide-y divide-gray-100 rounded-sm shadow-sm border border-gray-100 left-full top-0",
                        isEmpty(item?.children_category) && "group-two-hover:hidden",
                      )}
                    >
                      {item?.children_category?.map((child) => (
                        <Link
                          key={child.uuid}
                          to={`${HOME_PATH.PRODUCT}?filter=filter.category_include_children=${child.uuid}`}
                        >
                          <div className="block px-4  py-2 text-sm hover:text-primary-700 hover:bg-primary-100">
                            {child.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {type === DropdownTypeEnum.BLOCK && (
        <div className="group">
          <div className="cursor-pointer duration-75 hover:text-primary-700">{t("category")}</div>
          <div className={twMerge("w-full mt-1")}>
            <div className="py-1 w-full h-fit">
              {categories.map((item) => (
                <Link
                  key={item.uuid}
                  to={`${HOME_PATH.PRODUCT}?filter=filter.category_include_children=${item.uuid}`}
                >
                  <div className="block h-fit underline text-gray-700 px-4 py-2 text-sm hover:text-primary-700 hover:bg-primary-100">
                    {item.name}
                  </div>
                  <div className="pl-4">
                    {item?.children_category?.map((child) => (
                      <Link
                        key={child.uuid}
                        to={`${HOME_PATH.PRODUCT}?filter=filter.category_include_children=${child.uuid}`}
                      >
                        <div className="block px-4 text-gray-500 py-2 text-sm hover:text-primary-700 hover:bg-primary-100">
                          {child.name}
                        </div>
                      </Link>
                    ))}
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
