import { Key, memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { ProductDataType } from "@interfaces/Common/productType";
import { getProducts } from "@services/App/productService";

import AdminProductTable from "./Components/Table";

const AdminProductManagement = () => {
  const { t } = useTranslation();

  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setSelectedProductId] = useState<Key | null>(null);
  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedProductId(id ?? null);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedProductId(id ?? null);
  }, []);

  const fetchData = useCallback(async () => {
    getProducts()
      .then((response) => {
        setProductData(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <LayoutContentWrapper title={t("productManagement")}>
      <AdminProductTable
        data={productData}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
      />
    </LayoutContentWrapper>
  );
};
export default memo(AdminProductManagement);
