import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";

import { Alert, AlertProps } from "@components/Alert";

const meta: Meta<AlertProps> = {
  title: "Company/Alert",
  component: Alert,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-4">
        <Story />
      </div>
    ),
  ],
  args: {
    message: "There was a time in his life when her rudeness would have set him over the edge.",
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  args: {
    type: "normal",
    title: "Alert Basic",
  },
  render: (args) => <Alert {...args} />,
};

export const Status: Story = {
  render: (args) => (
    <>
      <Alert title="Normal" type="normal" {...omit(args, "title", "type")} />
      <Alert title="Danger" type="danger" {...omit(args, "title", "type")} />
      <Alert title="Warning" type="warning" {...omit(args, "title", "type")} />
      <Alert title="Success" type="success" {...omit(args, "title", "type")} />
    </>
  ),
  argTypes: {
    type: {
      control: false,
    },
    title: {
      control: false,
    },
  },
};

export const Footer: Story = {
  args: {
    title: "Alert Footer",
    children: <div>Do something...</div>,
    type: "normal",
  },
};
