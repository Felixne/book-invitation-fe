import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { TableProps } from "@components/Table";
import { ConfigDataType } from "@interfaces/Common";

import AdminConfigTableRowAction, { AdminConfigTableRowActionProps } from "./TableRowAction";

interface AdminConfigTableProps
  extends Omit<TableProps, "columns">,
    Omit<AdminConfigTableRowActionProps, "id"> {
  data: ConfigDataType[];
  isLoading: boolean;
}

const AdminConfigTable = ({ data, meta, isLoading, onClickEdit, onClickDelete }: AdminConfigTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<ConfigDataType>(), []);

  const columns: Array<ColumnDef<ConfigDataType, string>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "id",
        header: t("id"),
      }),
      columnHelper.accessor((row) => row.key, {
        id: "key",
        header: t("key"),
      }),
      columnHelper.accessor((row) => row.value, {
        id: "value",
        header: t("value"),
      }),
      columnHelper.accessor((row) => row.description, {
        id: "description",
        header: t("description"),
      }),
      columnHelper.display({
        id: "actions",
        cell: (props) => (
          <AdminConfigTableRowAction
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
      columns={columns as Array<ColumnDef<ConfigDataType>>}
      isLoading={isLoading}
    />
  );
};

export default memo(AdminConfigTable);
