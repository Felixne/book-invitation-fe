import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { ConfirmationModal } from "@components/Modal";
import { BaseListQueryType, ConfigDataType, ResponseMetaType } from "@interfaces/Common";
import { createConfig, deleteConfig, editConfig, getConfigs } from "@services/Common/configService";

import AdminConfigTable from "./Components/Table";
import AdminConfigModificationModal from "./Components/ModificationModal";
import AdminConfigHeaderAction from "./Components/HeaderAction";

const AdminConfigManagement = () => {
  const { t } = useTranslation();

  const [categoryData, setConfigData] = useState<ConfigDataType[]>([]);
  const [meta, setMeta] = useState<ResponseMetaType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModificationModal, setIsShowModificationModal] = useState<boolean>(false);
  const [selectedConfigId, setSelectedConfigId] = useState<Key | null>(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<BaseListQueryType | undefined>({});

  const selectedConfig = useMemo(() => {
    return categoryData.find((item) => item.uuid === selectedConfigId) ?? null;
  }, [selectedConfigId, categoryData]);

  const handleClickAddButton = useCallback(() => {
    setIsShowModificationModal(true);
  }, []);

  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedConfigId(id ?? null);
    setIsShowModificationModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowModificationModal(false);
    setIsShowDeleteModal(false);
    setSelectedConfigId(null);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedConfigId(id ?? null);
    setIsShowDeleteModal(true);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data, meta: metaData } = await getConfigs(queryParams);
      setConfigData(data);
      setMeta(metaData);
    } finally {
      setIsLoading(false);
    }
  }, [queryParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(async () => {
    try {
      await deleteConfig(selectedConfigId as number);
    } finally {
      fetchData();
    }
  }, [selectedConfigId, fetchData]);

  return (
    <LayoutContentWrapper
      title={t("categoryManagement")}
      action={<AdminConfigHeaderAction onClickAdd={handleClickAddButton} />}
    >
      <AdminConfigTable
        data={categoryData}
        meta={meta}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
        onChangeState={setQueryParams}
        onGetAll={getConfigs}
      />
      <AdminConfigModificationModal
        isOpen={isShowModificationModal}
        config={selectedConfig}
        onCreate={createConfig}
        onCreated={fetchData}
        onEdit={editConfig}
        onEdited={fetchData}
        onClose={handleCloseModal}
      />
      <ConfirmationModal
        title={t("deleteConfig")}
        message={t("deleteMessage")}
        isOpen={isShowDeleteModal}
        status="danger"
        onClose={handleCloseModal}
        onConfirm={handleDelete}
      />
    </LayoutContentWrapper>
  );
};
export default memo(AdminConfigManagement);
