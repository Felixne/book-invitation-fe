import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { ErrorNotFound } from "@common/Features";
import HomePage from "@common/Features/Home/HomePage";

import { HOME_PATH } from "../../../app/Constants";
import HomeBlankPage from "../Components/HomeBlankPage";

const HomeRoutes = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path={HOME_PATH.HOME} element={<HomePage />} />
      <Route path={HOME_PATH.CONTACT} element={<HomeBlankPage title={t("contact")} />} />
      <Route path={HOME_PATH.DESIGN} element={<HomeBlankPage title={t("design")} />} />
      <Route path={HOME_PATH.BLOGS} element={<HomeBlankPage title={t("blogs")} />} />
      <Route path={HOME_PATH.NOT_FOUND} element={<ErrorNotFound />} />
    </Routes>
  );
};

export default memo(HomeRoutes);
