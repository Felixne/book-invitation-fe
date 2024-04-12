import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { ConfirmationModal } from "@components/Modal";
import { ResponseMetaType, UserRoleDataType } from "@interfaces/Common";
import { createRole, deleteRole, editRole, getRoles } from "@services/Common/roleService";

import AdminRoleTable from "./Components/Table";
import AdminRoleModificationModal from "./Components/ModificationModal";
import AdminRoleHeaderAction from "./Components/HeaderAction";

const AdminRoleManagement = () => {
  const { t } = useTranslation();

  const [roleData, setRoleData] = useState<UserRoleDataType[]>([]);
  const [meta, setMeta] = useState<ResponseMetaType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModificationModal, setIsShowModificationModal] = useState<boolean>(false);
  const [selectedRoleId, setSelectedRoleId] = useState<Key | null>(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);

  const selectedRole = useMemo(() => {
    return roleData?.find((item) => item.uuid === selectedRoleId) ?? null;
  }, [selectedRoleId, roleData]);

  const handleClickAddButton = useCallback(() => {
    setIsShowModificationModal(true);
  }, []);

  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedRoleId(id ?? null);
    setIsShowModificationModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowModificationModal(false);
    setIsShowDeleteModal(false);
    setSelectedRoleId(null);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedRoleId(id ?? null);
    setIsShowDeleteModal(true);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data, meta: metaData } = await getRoles();
      setRoleData(data);
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
      await deleteRole(selectedRoleId as number);
    } finally {
      fetchData();
    }
  }, [selectedRoleId, fetchData]);

  return (
    <LayoutContentWrapper
      title={t("roleManagement")}
      action={<AdminRoleHeaderAction onClickAdd={handleClickAddButton} />}
    >
      <AdminRoleTable
        data={roleData}
        meta={meta}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
      />
      <AdminRoleModificationModal
        isOpen={isShowModificationModal}
        roleData={selectedRole}
        onCreate={createRole}
        onCreated={fetchData}
        onEdit={editRole}
        onEdited={fetchData}
        onClose={handleCloseModal}
      />
      <ConfirmationModal
        title={t("deleteRole")}
        message={t("deleteMessage")}
        isOpen={isShowDeleteModal}
        status="danger"
        onClose={handleCloseModal}
        onConfirm={handleDelete}
      />
    </LayoutContentWrapper>
  );
};
export default memo(AdminRoleManagement);
