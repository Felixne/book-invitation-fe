import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { HOME_PATH } from "@constants/routeConstant";

import FooterLinkItem from "../../Footer/LinkItem";
import LinkGroup from "./LinkGroup";
import { SidebarLinkGroupEnum } from "./constant";

interface SidebarLinkProps {
  className?: string;
}

const SidebarLink = ({ className }: SidebarLinkProps) => {
  const { t } = useTranslation();
  const [selectedGroupId, setSelectedGroupId] = useState(SidebarLinkGroupEnum.COMPANY);

  const handlePreventEvent = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  const handleSelectGroup = useCallback((id: SidebarLinkGroupEnum) => setSelectedGroupId(id), []);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handlePreventEvent}
      className={twMerge("mt-4 h-fit w-full border-t pt-4 xs:block md:hidden", className)}
    >
      <LinkGroup
        name={t("more")}
        selectedGroupId={selectedGroupId}
        id={SidebarLinkGroupEnum.COMPANY}
        onClickShowChildren={handleSelectGroup}
      >
        <FooterLinkItem
          to={HOME_PATH.BLOGS}
          className="mb-0.5 rounded-md p-2 hover:bg-gray-200 hover:text-primary-600"
        >
          {t("blog")}
        </FooterLinkItem>

        <FooterLinkItem
          to={HOME_PATH.CONTACT}
          className="mb-0.5 rounded-md p-2 hover:bg-gray-200 hover:text-primary-600"
        >
          {t("contact")}
        </FooterLinkItem>
      </LinkGroup>
    </div>
  );
};
export default memo(SidebarLink);
