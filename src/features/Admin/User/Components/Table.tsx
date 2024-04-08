import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableImageColumn from "@components/Table/TableImageColumn";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { UserDataType } from "@interfaces/Common";
import { TableImageColumnTypeEnum } from "@enums/commonEnum";

import AdminUserTableRowAction, { AdminUserTableRowActionProps } from "./TableRowAction";

interface AdminUserTableProps extends Omit<AdminUserTableRowActionProps, "id"> {
  data: UserDataType[];
  isLoading: boolean;
}

const AdminUserTable = ({ data, isLoading, onClickEdit, onClickDelete }: AdminUserTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<UserDataType>(), []);

  const columns: Array<ColumnDef<UserDataType, string>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "id",
        header: t("id"),
      }),
      columnHelper.display({
        id: "avatar",
        header: t("avatar"),
        cell: (props) => (
          <TableImageColumn alt={props.row.original.name} type={TableImageColumnTypeEnum.ROUNDED} />
        ),
        meta: {
          skeleton: <TableImageColumn skeleton type={TableImageColumnTypeEnum.ROUNDED} />,
        },
      }),
      columnHelper.accessor((row) => row.username, {
        id: "username",
        header: t("username"),
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: t("email"),
      }),
      columnHelper.accessor((row) => row.name, {
        id: "name",
        header: t("name"),
      }),
      columnHelper.display({
        id: "actions",
        cell: (props) => (
          <AdminUserTableRowAction
            id={props.row.original.uuid}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          />
        ),
        meta: {
          skeleton: <TableRowActionSkeleton numberOfActions={2} />,
        },
      }),
    ],
    [columnHelper, onClickDelete, onClickEdit, t],
  );

  return (
    <Table
      data={data}
      meta={null}
      columns={columns as Array<ColumnDef<UserDataType>>}
      isLoading={isLoading}
    />
  );
};

export default memo(AdminUserTable);
