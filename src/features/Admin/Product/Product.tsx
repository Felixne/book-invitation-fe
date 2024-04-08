import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { ConfirmationModal } from "@components/Modal";
import { ResponseMetaType } from "@interfaces/Common";
import { ProductDataType } from "@interfaces/Common/productType";

import AdminProductTable from "./Components/Table";
import AdminProductModificationModal from "./Components/ModificationModal";
import AdminProductHeaderAction from "./Components/HeaderAction";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../../../app/Services/App/productService";

const AdminProductManagement = () => {
  const { t } = useTranslation();

  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [meta, setMeta] = useState<ResponseMetaType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModificationModal, setIsShowModificationModal] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<Key | null>(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

  const selectedProduct = useMemo(() => {
    return productData.find((item) => item.uuid === selectedProductId) ?? null;
  }, [selectedProductId, productData]);

  const handleClickAddButton = useCallback(() => {
    setIsShowModificationModal(true);
  }, []);

  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedProductId(id ?? null);
    setIsShowModificationModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowModificationModal(false);
    setIsShowDeleteModal(false);
    setSelectedProductId(null);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedProductId(id ?? null);
    setIsShowDeleteModal(true);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data, meta: metaData } = await getProducts();
      setProductData(data);
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
      await deleteProduct(selectedProductId as number);
    } finally {
      fetchData();
    }
  }, [selectedProductId, fetchData]);

  return (
    <LayoutContentWrapper
      title={t("productManagement")}
      action={<AdminProductHeaderAction onClickAdd={handleClickAddButton} />}
    >
      <AdminProductTable
        data={productData}
        meta={meta}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
      />
      <AdminProductModificationModal
        isOpen={isShowModificationModal}
        product={selectedProduct}
        onCreate={createProduct}
        onCreated={fetchData}
        onEdit={editProduct}
        onEdited={fetchData}
        onClose={handleCloseModal}
      />
      <ConfirmationModal
        title={t("deleteProduct")}
        message={t("deleteMessage")}
        isOpen={isShowDeleteModal}
        status="danger"
        onClose={handleCloseModal}
        onConfirm={handleDelete}
      />
    </LayoutContentWrapper>
  );
};
export default memo(AdminProductManagement);
