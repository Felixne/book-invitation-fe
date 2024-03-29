import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { ErrorNotFound } from "@common/Features";
import HomePage from "@common/Features/Home/HomePage";

import { HOME_PATH } from "../../../app/Constants";
import HomeBlankPage from "../Components/HomeBlankPage";

const HomeRoutes = () => {
  const { t } = useTranslation("company");

  return (
    <Routes>
      <Route path={HOME_PATH.HOME} element={<HomePage />} />
      <Route path={HOME_PATH.CONTACT} element={<HomeBlankPage title={t("contact")} />} />
      <Route path={HOME_PATH.GETTING_STARTED} element={<HomeBlankPage title={t("started")} />} />
      <Route path={HOME_PATH.DOCUMENTATION} element={<HomeBlankPage title={t("documentation")} />} />
      <Route path={HOME_PATH.GUIDE} element={<HomeBlankPage title={t("guide")} />} />
      <Route path={HOME_PATH.FAQ} element={<HomeBlankPage title={t("faq")} />} />
      <Route path={HOME_PATH.TERM} element={<HomeBlankPage title={t("termAndCondition")} />} />
      <Route path={HOME_PATH.NOTICE} element={<HomeBlankPage title={t("notice")} />} />
      <Route path={HOME_PATH.CLAIM} element={<HomeBlankPage title={t("claim")} />} />
      <Route path={HOME_PATH.NOT_FOUND} element={<ErrorNotFound />} />
    </Routes>
  );
};

export default memo(HomeRoutes);
