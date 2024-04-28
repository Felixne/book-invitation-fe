import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { ProductDataType } from "@interfaces/Common/productType";
import TableImageColumn from "@components/Table/TableImageColumn";
import { TableImageColumnTypeEnum } from "@enums/commonEnum";
import { TableProps } from "@components/Table";
import { BaseListQueryType, ResponseDataType } from "@interfaces/Common";

import AdminProductTableRowAction, { AdminProductTableRowActionProps } from "./TableRowAction";

interface AdminProductTableProps
  extends Omit<TableProps, "columns">,
    Omit<AdminProductTableRowActionProps, "id"> {
  data: ProductDataType[];
  isLoading: boolean;
  onGetAll: (params?: BaseListQueryType) => Promise<ResponseDataType<ProductDataType[]>>;
}

const AdminProductTable = ({
  data,
  meta,
  isLoading,
  onClickEdit,
  onClickDelete,
  onGetAll,
  ...props
}: AdminProductTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<ProductDataType>(), []);

  const columns: Array<ColumnDef<ProductDataType, string>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "uuid",
        header: t("id"),
      }),
      columnHelper.display({
        id: "img",
        header: t("img"),
        cell: (cell) => (
          <TableImageColumn
            className="w-28 h-40 rounded-md"
            src={cell.row.original.image}
            alt={cell.row.original.name}
            type={TableImageColumnTypeEnum.BOX}
          />
        ),
        meta: {
          skeleton: <TableImageColumn skeleton type={TableImageColumnTypeEnum.BOX} />,
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
      columnHelper.accessor((row) => row.price, {
        id: "price",
        header: t("price"),
      }),
      columnHelper.accessor((row) => row.description, {
        id: "description",
        header: t("description"),
      }),
      columnHelper.accessor((row) => row.category.name, {
        id: "category.name",
        header: t("category"),
      }),
      columnHelper.display({
        id: "actions",
        cell: (cell) => (
          <AdminProductTableRowAction
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
      columns={columns as Array<ColumnDef<ProductDataType>>}
      isLoading={isLoading}
      {...props}
    />
  );
};

export default memo(AdminProductTable);
