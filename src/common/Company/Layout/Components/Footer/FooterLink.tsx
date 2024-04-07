import { memo } from "react";
import { useTranslation } from "react-i18next";

import { HOME_PATH } from "@constants/routeConstant";

import FooterLinkItem from "./LinkItem";

interface FooterLinkProps {
  className?: string;
}

const FooterLink = ({ className }: FooterLinkProps) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <div className="my-2 flex flex-col sm:my-4">
        <div className="mb-3 font-bold">{t("more")}</div>
        <div className="flex flex-col ">
          <FooterLinkItem to={HOME_PATH.BLOGS}>{t("blog")}</FooterLinkItem>
          <FooterLinkItem to={HOME_PATH.CONTACT}>{t("contact")}</FooterLinkItem>
        </div>
      </div>
      <div className="my-2 flex flex-col sm:my-4">
        <div className="mb-3 font-bold">{t("support")}</div>
      </div>
      <div className="my-2 flex flex-col sm:my-4">
        <div className="mb-3 font-bold">{t("trustAndLegal")}</div>
      </div>
    </div>
  );
};

export default memo(FooterLink);
