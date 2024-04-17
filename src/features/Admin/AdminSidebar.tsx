import { memo } from "react";
import { useTranslation } from "react-i18next";
import {
  MdOutlineCategory,
  MdOutlineLocalOffer,
  MdOutlineSettings,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { LuUser, LuUserCog } from "react-icons/lu";

import { LayoutSidebar, LayoutSidebarItem } from "@common/Layout";
import { ADMIN_PATH } from "@constants/routeConstant";

const AdminSidebar = () => {
  const { t } = useTranslation();
  return (
    <LayoutSidebar id="adminSidebar" className="pt-20">
      <LayoutSidebarItem
        id="order"
        icon={<MdOutlineShoppingCart />}
        text={t("order")}
        to={ADMIN_PATH.ORDER}
      />
      <LayoutSidebarItem
        id="product"
        icon={<MdOutlineLocalOffer />}
        text={t("product")}
        to={ADMIN_PATH.PRODUCT}
      />
      <LayoutSidebarItem
        id="category"
        icon={<MdOutlineCategory />}
        text={t("category")}
        to={ADMIN_PATH.CATEGORY}
      />
      <LayoutSidebarItem id="user" icon={<LuUser />} text={t("user")} to={ADMIN_PATH.USER} />
      <LayoutSidebarItem id="role" icon={<LuUserCog />} text={t("role")} to={ADMIN_PATH.ROLE} />
      <LayoutSidebarItem id="config" icon={<MdOutlineSettings />} text={t("config")} to={ADMIN_PATH.CONFIG} />
    </LayoutSidebar>
  );
};
export default memo(AdminSidebar);
