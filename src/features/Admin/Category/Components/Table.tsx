import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import Table from "@components/Table/Table";
import TableRowActionSkeleton from "@components/Table/TableRowActionSkeleton";
import { CategoryDataType } from "@interfaces/Common/categoryType";

import AdminCategoryTableRowAction, { AdminCategoryTableRowActionProps } from "./TableRowAction";

interface AdminCategoryTableProps extends Omit<AdminCategoryTableRowActionProps, "id"> {
  data: CategoryDataType[];
  isLoading: boolean;
}

const AdminCategoryTable = ({ data, isLoading, onClickEdit, onClickDelete }: AdminCategoryTableProps) => {
  const { t } = useTranslation();

  const columnHelper = useMemo(() => createColumnHelper<CategoryDataType>(), []);

  const columns: Array<ColumnDef<CategoryDataType, string>> = useMemo(
    () => [
      columnHelper.accessor((row) => String(row.uuid), {
        id: "id",
        header: t("id"),
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
          <AdminCategoryTableRowAction
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
      columns={columns as Array<ColumnDef<CategoryDataType>>}
      isLoading={isLoading}
    />
  );
};

export default memo(AdminCategoryTable);
