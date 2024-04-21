import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "@constants/routeConstant";
import { DropdownTypeEnum } from "@enums/commonEnum";

import LayoutSidebar from "./Sidebar";
import HeaderNavlinkDropdown from "../Header/HeaderNavlinkDropdown";

const SidebarMobileGuest = () => {
  const { t } = useTranslation();
  return (
    <LayoutSidebar id="guestSidebar" className="w-full pt-0" containerClassName="w-screen">
      <HeaderNavlinkDropdown type={DropdownTypeEnum.BLOCK} className="w-full p-2" />
      <div className="w-full p-2">
        <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.CARD}>
          {t("card")}
        </Link>
      </div>
      <div className="w-full p-2">
        <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.BLOGS}>
          {t("blogs")}
        </Link>
      </div>
      <div className="w-full p-2">
        <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.CONTACT}>
          {t("contact")}
        </Link>
      </div>
    </LayoutSidebar>
  );
};

export default memo(SidebarMobileGuest);
