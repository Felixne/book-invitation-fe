import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import useDocumentTitle from "@hooks/useDocumentTitle";

import ProductDetail from "./ProductDetail";
import ProductPage from "./ProductPage";

const ProductRoutes = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("product"));
  return (
    <Routes>
      <Route path="*" element={<ProductPage />} />
      <Route path=":productId" element={<ProductDetail />} />
    </Routes>
  );
};
export default ProductRoutes;
