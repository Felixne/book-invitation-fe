import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableImageColumn from "@components/Table/TableImageColumn";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { BaseListQueryType, ResponseDataType, UserDataType } from "@interfaces/Common";
import { TableImageColumnTypeEnum } from "@enums/commonEnum";
import { TableProps } from "@components/Table";

import AdminUserTableRowAction, { AdminUserTableRowActionProps } from "./TableRowAction";

interface AdminUserTableProps extends Omit<TableProps, "columns">, Omit<AdminUserTableRowActionProps, "id"> {
  data: UserDataType[];
  isLoading: boolean;
  onGetAll: (params?: BaseListQueryType) => Promise<ResponseDataType<UserDataType[]>>;
}

const AdminUserTable = ({
  data,
  isLoading,
  onClickEdit,
  onClickDelete,
  onGetAll,
  ...props
}: AdminUserTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<UserDataType>(), []);

  const columns: Array<ColumnDef<UserDataType, string>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "uuid",
        header: t("id"),
      }),
      columnHelper.display({
        id: "avatar",
        header: t("avatar"),
        cell: (cell) => (
          <TableImageColumn alt={cell.row.original.name} type={TableImageColumnTypeEnum.ROUNDED} />
        ),
        meta: {
          skeleton: <TableImageColumn skeleton type={TableImageColumnTypeEnum.ROUNDED} />,
        },
      }),
      columnHelper.accessor((row) => row.username, {
        id: "username",
        header: t("username"),
        meta: {
          filterBy: "username",
          getFilterOptions: onGetAll,
        },
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: t("email"),
        meta: {
          filterBy: "email",
          getFilterOptions: onGetAll,
        },
      }),
      columnHelper.accessor((row) => row.name, {
        id: "name",
        header: t("name"),
        meta: {
          filterBy: "name",
          getFilterOptions: onGetAll,
        },
      }),
      columnHelper.display({
        id: "actions",
        cell: (cell) => (
          <AdminUserTableRowAction
            id={cell.row.original.uuid}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          />
        ),
        meta: {
          skeleton: <TableRowActionSkeleton numberOfActions={2} />,
        },
      }),
    ],
    [columnHelper, onClickDelete, onClickEdit, t, onGetAll],
  );

  return (
    <Table data={data} columns={columns as Array<ColumnDef<UserDataType>>} isLoading={isLoading} {...props} />
  );
};

export default memo(AdminUserTable);
