import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { CategoryDataType } from "@interfaces/Common/categoryType";
import { createCategory, deleteCategory, editCategory, getCaterories } from "@services/App/categoryService";
import { ConfirmationModal } from "@components/Modal";
import { ResponseMetaType } from "@interfaces/Common";

import AdminCategoryTable from "./Components/Table";
import AdminCategoryModificationModal from "./Components/ModificationModal";
import AdminCategoryHeaderAction from "./Components/HeaderAction";

const AdminCategoryManagement = () => {
  const { t } = useTranslation();

  const [categoryData, setCategoryData] = useState<CategoryDataType[]>([]);
  const [meta, setMeta] = useState<ResponseMetaType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModificationModal, setIsShowModificationModal] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<Key | null>(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

  const selectedCategory = useMemo(() => {
    return categoryData.find((item) => item.uuid === selectedCategoryId) ?? null;
  }, [selectedCategoryId, categoryData]);

  const handleClickAddButton = useCallback(() => {
    setIsShowModificationModal(true);
  }, []);

  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedCategoryId(id ?? null);
    setIsShowModificationModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowModificationModal(false);
    setIsShowDeleteModal(false);
    setSelectedCategoryId(null);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedCategoryId(id ?? null);
    setIsShowDeleteModal(true);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data, meta: metaData } = await getCaterories();
      setCategoryData(data);
      setMeta(metaData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(async () => {
    try {
      await deleteCategory(selectedCategoryId as number);
    } finally {
      fetchData();
    }
  }, [selectedCategoryId, fetchData]);

  return (
    <LayoutContentWrapper
      title={t("categoryManagement")}
      action={<AdminCategoryHeaderAction onClickAdd={handleClickAddButton} />}
    >
      <AdminCategoryTable
        data={categoryData}
        meta={meta}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
      />
      <AdminCategoryModificationModal
        isOpen={isShowModificationModal}
        category={selectedCategory}
        onCreate={createCategory}
        onCreated={fetchData}
        onEdit={editCategory}
        onEdited={fetchData}
        onClose={handleCloseModal}
      />
      <ConfirmationModal
        title={t("deleteCategory")}
        message={t("deleteMessage")}
        isOpen={isShowDeleteModal}
        status="danger"
        onClose={handleCloseModal}
        onConfirm={handleDelete}
      />
    </LayoutContentWrapper>
  );
};
export default memo(AdminCategoryManagement);
