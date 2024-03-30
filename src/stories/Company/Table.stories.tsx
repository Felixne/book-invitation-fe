import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Table as TableComponent,
  TableFilterTypeEnum,
  TableProps,
  TableSearchGroupType,
} from "@components/Table";
import TableImageColumn from "@components/Table/TableImageColumn";
import { BaseListQueryType, ResponseMetaType, UserDataType } from "@interfaces/Common";
import { adminUserService } from "@services/index";

const meta: Meta<TableProps> = {
  title: "Company/Table",
  component: TableComponent,
  args: {
    isLoading: false,
  },
};

export default meta;

type Story = StoryObj<typeof TableComponent>;

interface TableStoryProps extends Omit<TableProps, "columns"> {}

const TableStory = ({ isLoading: isLoadingProp }: TableStoryProps) => {
  const [data, setData] = useState<UserDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMeta, setResponseMeta] = useState<ResponseMetaType | null>(null);

  const isReadyRef = useRef<boolean>(false);

  const tableSearchGroups: TableSearchGroupType[] = useMemo(
    () => [
      {
        key: "userInfo",
        label: "User Info",
        field: {
          fullName: "Full Name",
        },
      },
    ],
    [],
  );

  const columnHelper = useMemo(() => createColumnHelper<UserDataType>(), []);
  const columns: Array<ColumnDef<UserDataType, string>> = useMemo(
    () => [
      columnHelper.display({
        id: "avatar",
        header: "Avatar",
        cell: (table) => (
          <TableImageColumn src={table.row.original.avatar} alt={table.row.original.fullName} />
        ),
      }),
      columnHelper.accessor((row) => row.fullName, {
        id: "fullName",
        header: "Name",
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: "Email",
        meta: {
          filterBy: "email",
          filterLabel: "Email",
          getFilterOptions: adminUserService.getUsers,
        },
      }),
      columnHelper.accessor((row) => row.createdAt, {
        id: "createdAt",
        header: "Created At",
        meta: {
          filterBy: "createdAt",
          filterLabel: "Created At",
          filterType: TableFilterTypeEnum.DATE_RANGE,
          getFilterOptions: adminUserService.getUsers,
        },
      }),
    ],
    [columnHelper],
  );

  const getData = useCallback(async () => {
    setIsLoading(true);

    const response = await adminUserService.getUsers();

    setData(response.data);
    setResponseMeta(response.meta);
    setIsLoading(false);
    isReadyRef.current = true;
  }, []);

  const handleChangeState = useCallback((state: BaseListQueryType) => {
    action("onChangeState")(state);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (!isReadyRef.current) {
      return;
    }

    if (isLoadingProp !== undefined) {
      setIsLoading(isLoadingProp);
    }
  }, [isLoadingProp]);

  return (
    <BrowserRouter>
      <TableComponent
        columns={columns as Array<ColumnDef<UserDataType>>}
        data={data}
        // headerClassName={twMerge("mb-0", headerClassName)}
        // footerClassName={twMerge("mt-4", footerClassName)}
        isLoading={isLoading}
        searchGroup={tableSearchGroups}
        meta={responseMeta}
        onChangeState={handleChangeState}
      />
    </BrowserRouter>
  );
};

export const Basic: Story = {
  render: (props) => <TableStory {...props} />,
  args: {
    isLoading: false,
  },
};
