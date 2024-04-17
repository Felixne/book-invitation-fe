import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { TableProps } from "@components/Table";
import { UserRoleDataType } from "@interfaces/Common";
import { UserRoleEnum } from "@enums/userEnum";

import AdminRoleTableRowAction, { AdminRoleTableRowActionProps } from "./TableRowAction";

interface AdminRoleTableProps extends Omit<TableProps, "columns">, Omit<AdminRoleTableRowActionProps, "id"> {
  data: UserRoleDataType[];
  isLoading: boolean;
}

const AdminRoleTable = ({ data, meta, isLoading, onClickEdit, onClickDelete }: AdminRoleTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<UserRoleDataType>(), []);

  const columns: Array<ColumnDef<UserRoleDataType, UserRoleEnum>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "id",
        header: t("id"),
      }),
      columnHelper.accessor((row) => row.name, {
        id: "name",
        header: t("name"),
      }),
      columnHelper.display({
        id: "actions",
        cell: (props) => (
          <AdminRoleTableRowAction
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
      meta={meta}
      columns={columns as Array<ColumnDef<UserRoleDataType>>}
      isLoading={isLoading}
    />
  );
};

export default memo(AdminRoleTable);
