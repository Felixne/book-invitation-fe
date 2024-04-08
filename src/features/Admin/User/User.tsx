import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { LayoutContentWrapper } from "@common/Layout";
import { ConfirmationModal } from "@components/Modal";
import { UserDataType } from "@interfaces/Common";
import { adminUserService } from "@services/index";
import { deleteUser } from "@services/Admin/userService";

import AdminUserHeaderAction from "./Components/HeaderAction";
import AdminUserModificationModal from "./Components/ModificationModal";
import AdminUserTable from "./Components/Table";

const AdminUserManagement = () => {
  const { t } = useTranslation();

  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowModificationModal, setIsShowModificationModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<Key | null>(null);

  const selectedUser = useMemo(() => {
    return userData.find((item) => item.uuid === selectedUserId) ?? null;
  }, [selectedUserId, userData]);

  const handleClickAddButton = useCallback(() => {
    setIsShowModificationModal(true);
  }, []);

  const handleClickEditButton = useCallback((id?: Key) => {
    setSelectedUserId(id ?? null);
    setIsShowModificationModal(true);
  }, []);

  const handleClickDeleteButton = useCallback((id?: Key) => {
    setSelectedUserId(id ?? null);
    setIsShowDeleteModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShowModificationModal(false);
    setIsShowDeleteModal(false);
    setSelectedUserId(null);
  }, []);

  const fetchData = useCallback(async () => {
    adminUserService
      .getUsers()
      .then((response) => {
        setUserData(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(async () => {
    try {
      await deleteUser(selectedUserId as number);
    } finally {
      fetchData();
    }
  }, [selectedUserId, fetchData]);

  return (
    <LayoutContentWrapper
      title={t("userManagement")}
      action={<AdminUserHeaderAction onClickAdd={handleClickAddButton} />}
    >
      <AdminUserTable
        data={userData}
        isLoading={isLoading}
        onClickEdit={handleClickEditButton}
        onClickDelete={handleClickDeleteButton}
      />
      <ConfirmationModal
        title={t("deleteUser", { name: selectedUser?.name })}
        message={t("deleteMessage")}
        isOpen={isShowDeleteModal}
        status="danger"
        onClose={handleCloseModal}
        onConfirm={handleDelete}
      />
      <AdminUserModificationModal
        isOpen={isShowModificationModal}
        user={selectedUser}
        onCreate={adminUserService.createUser}
        onCreated={fetchData}
        onEdit={adminUserService.editUser}
        onEdited={fetchData}
        onClose={handleCloseModal}
      />
    </LayoutContentWrapper>
  );
};

export default memo(AdminUserManagement);
