import { memo } from "react";
import { useTranslation } from "react-i18next";

import useDocumentTitle from "@hooks/useDocumentTitle";

const Home = () => {
  const { t } = useTranslation();

  useDocumentTitle(t("home"));

  return <div className="flex h-fit-layout w-full items-center justify-center">{t("home")}</div>;
};

export default memo(Home);
