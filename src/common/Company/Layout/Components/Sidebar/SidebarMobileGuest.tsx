import { memo } from "react";
import { useTranslation } from "react-i18next";

import { HOME_PATH } from "@constants/routeConstant";

import LayoutSidebar from "./Sidebar";
import LayoutSidebarItem from "./Item";

const SidebarMobileGuest = () => {
  const { t } = useTranslation();
  return (
    <LayoutSidebar id="guestSidebar" className="w-full pt-0" containerClassName="w-screen">
      <LayoutSidebarItem id="product" text={t("product")} to={HOME_PATH.PRODUCT} />
      <LayoutSidebarItem id="card" text={t("card")} to={HOME_PATH.DESIGN} />
      <LayoutSidebarItem id="blogs" text={t("blogs")} to={HOME_PATH.BLOGS} />
      <LayoutSidebarItem id="contact" text={t("contact")} to={HOME_PATH.CONTACT} />
    </LayoutSidebar>
  );
};

export default memo(SidebarMobileGuest);
