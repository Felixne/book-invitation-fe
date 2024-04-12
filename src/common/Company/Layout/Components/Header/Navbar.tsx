import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH, PRODUCT_PATH } from "@constants/routeConstant";

const LayoutHeaderNavbar = () => {
  const { t } = useTranslation();

  return (
    <div className="ml-12 hidden items-center space-x-8 lg:flex">
      <Link className="cursor-pointer duration-75 hover:text-primary-700" to={PRODUCT_PATH.PRODUCT}>
        {t("product")}
      </Link>
      <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.CARD}>
        {t("card")}
      </Link>
      <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.BLOGS}>
        {t("blogs")}
      </Link>
      <Link className="cursor-pointer duration-75 hover:text-primary-700" to={HOME_PATH.CONTACT}>
        {t("contact")}
      </Link>
    </div>
  );
};

export default memo(LayoutHeaderNavbar);
