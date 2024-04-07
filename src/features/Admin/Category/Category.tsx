import { Key, memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { CategoryDataType } from "@interfaces/Common/categoryType";
import { getCaterories } from "@services/App/categoryService";

import AdminCategoryTable from "./Components/Table";

const AdminCategoryManagement = () => {
  const { t } = useTranslation();

  const [categoryData, setCategoryData] = useState<CategoryDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setSelectedCategoryId] = useState<Key | null>(null);
  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedCategoryId(id ?? null);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedCategoryId(id ?? null);
  }, []);

  const fetchData = useCallback(async () => {
    getCaterories()
      .then((response) => {
        setCategoryData(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <LayoutContentWrapper title={t("categoryManagement")}>
      <AdminCategoryTable
        data={categoryData}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
      />
    </LayoutContentWrapper>
  );
};
export default memo(AdminCategoryManagement);
