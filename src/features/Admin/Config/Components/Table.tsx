import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { TableProps } from "@components/Table";
import { BaseListQueryType, ConfigDataType, ResponseDataType } from "@interfaces/Common";
import { ConfigDataTypeEnum } from "@enums/configEnum";

import AdminConfigTableRowAction, { AdminConfigTableRowActionProps } from "./TableRowAction";
import ValueColumn from "./ValueColumn";

interface AdminConfigTableProps
  extends Omit<TableProps, "columns">,
    Omit<AdminConfigTableRowActionProps, "id"> {
  data: ConfigDataType[];
  isLoading: boolean;
  onGetAll: (params?: BaseListQueryType) => Promise<ResponseDataType<ConfigDataType[]>>;
}

const AdminConfigTable = ({
  data,
  meta,
  isLoading,
  onClickEdit,
  onClickDelete,
  onGetAll,
  ...props
}: AdminConfigTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<ConfigDataType>(), []);

  const columns: Array<ColumnDef<ConfigDataType, ConfigDataTypeEnum>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "id",
        header: t("id"),
      }),
      columnHelper.accessor((row) => row.key, {
        id: "key",
        header: t("key"),
        meta: {
          filterBy: "key",
          getFilterOptions: onGetAll,
        },
      }),
      columnHelper.accessor((row) => row.datatype, {
        id: "datatype",
        header: t("datatype"),
      }),
      columnHelper.display({
        id: "value",
        cell: (cell) => <ValueColumn config={cell.row.original} />,
      }),
      columnHelper.accessor((row) => row.description, {
        id: "description",
        header: t("description"),
      }),
      columnHelper.display({
        id: "actions",
        cell: (cell) => (
          <AdminConfigTableRowAction
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
    <Table
      data={data}
      meta={meta}
      columns={columns as Array<ColumnDef<ConfigDataType>>}
      isLoading={isLoading}
      {...props}
    />
  );
};

export default memo(AdminConfigTable);
