import { memo } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineCategory, MdOutlineLocalOffer, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

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
      <LayoutSidebarItem id="user" icon={<AiOutlineUser />} text={t("user")} to={ADMIN_PATH.USER} />
      <LayoutSidebarItem
        id="category"
        icon={<MdOutlineCategory />}
        text={t("category")}
        to={ADMIN_PATH.CATEGORY}
      />
    </LayoutSidebar>
  );
};
export default memo(AdminSidebar);
