import { useTranslation } from "react-i18next";

import Product from "@common/Features/Home/Product/Product";

const ProductPage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit px-20 py-8">
        <div className="w-full text-center h-fit text-2xl font-semibold">{t("category")}</div>
        <div className="text-sm font-thin text-center w-full ">{t("productDescription")}</div>
      </div>
      <Product />
    </div>
  );
};
export default ProductPage;
