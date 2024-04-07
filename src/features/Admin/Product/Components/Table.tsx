import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { ProductDataType } from "@interfaces/Common/productType";
import TableImageColumn from "@components/Table/TableImageColumn";
import { TableImageColumnTypeEnum } from "@enums/commonEnum";

import AdminProductTableRowAction, { AdminProductTableRowActionProps } from "./TableRowAction";

interface AdminProductTableProps extends Omit<AdminProductTableRowActionProps, "id"> {
  data: ProductDataType[];
  isLoading: boolean;
}

const AdminProductTable = ({ data, isLoading, onClickEdit, onClickDelete }: AdminProductTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<ProductDataType>(), []);

  const columns: Array<ColumnDef<ProductDataType, string>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "id",
        header: t("id"),
      }),
      columnHelper.display({
        id: "img",
        header: t("img"),
        cell: (props) => (
          <TableImageColumn
            className="w-28 h-40 rounded-md"
            src={props.row.original.image}
            alt={props.row.original.name}
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
      }),
      columnHelper.accessor((row) => row.description, {
        id: "description",
        header: t("description"),
      }),
      columnHelper.display({
        id: "actions",
        cell: (props) => (
          <AdminProductTableRowAction
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
      columns={columns as Array<ColumnDef<ProductDataType>>}
      isLoading={isLoading}
    />
  );
};

export default memo(AdminProductTable);
