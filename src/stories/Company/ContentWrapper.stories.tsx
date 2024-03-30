import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { useCallback, useMemo, useState } from "react";
import { Provider } from "react-redux";

import {
  LayoutContentWrapper,
  LayoutContentWrapperProps,
  LayoutContentWrapperTabItemType,
} from "@common/Layout";
import { Button } from "@components/Button";
import { TableProps } from "@components/Table";

import { store } from "../../app/store";
import { Basic as TableStoryBasic } from "./Table.stories";

type Story = StoryObj<LayoutContentWrapperProps>;

const meta: Meta = {
  title: "Company/Layout/ContentWrapper",
  component: LayoutContentWrapper,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  args: {
    // @ts-ignore
    // eslint-disable-next-line react/jsx-pascal-case
    children: <TableStoryBasic.render {...omit(TableStoryBasic.args as TableProps, "columns")} />,
    className: "px-2 -mt-4",
    actions: <Button onClick={action("onHeaderActionClick")}>Header Action</Button>,
  },
  argTypes: {
    children: {
      control: false,
    },
    actions: {
      control: false,
    },
  },
};

export default meta;

const ContentWrapperTabStory = (props: LayoutContentWrapperProps) => {
  const [activatedTab, setActivatedTab] = useState<string>("firstTab");

  const tabs: LayoutContentWrapperTabItemType[] = useMemo(
    () => [
      {
        id: "firstTab",
        title: "First Tab",
      },
      {
        id: "secondTab",
        title: "Second Tab",
      },
    ],
    [],
  );

  const handleChangeTab = useCallback((tab: string) => {
    setActivatedTab(tab);
    action("onSelectTab")(tab);
  }, []);

  return (
    // @ts-ignore
    <LayoutContentWrapper
      tabs={tabs}
      activatedTab={activatedTab}
      onChangeTab={handleChangeTab}
      {...omit(props, "tabs", "activatedTab", "onSelectTab", "children")}
    >
      <div>First Tab Content</div>
      <div>Second Tab Content</div>
    </LayoutContentWrapper>
  );
};

export const Basic: Story = {
  args: {
    title: "Content Wrapper",
  },
};

export const Blank: Story = {
  args: {
    title: "Blank Content Wrapper",
    isBlank: true,
    isBorder: false,
  },
};

export const Tab: Story = {
  args: {
    title: "Tab Content Wrapper",
  },
  render: (props: LayoutContentWrapperProps) => (
    <>
      <ContentWrapperTabStory {...props} />
      {/* @ts-ignore */}
      <ContentWrapperTabStory
        tabStyle="line"
        isShowHeader={false}
        {...omit(props, "tabStyle", "isShowHeader")}
      />
    </>
  ),
};
