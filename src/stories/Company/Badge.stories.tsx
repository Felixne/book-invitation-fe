import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";

import { Badge, BadgeProps } from "@components/Badge";

type Story = StoryObj<BadgeProps>;

const meta: Meta<BadgeProps> = {
  title: "Company/Badge",
  component: Badge,
  args: {
    children: "Badge",
    status: "success",
  },
};

export default meta;

export const Basic: Story = {};

export const Status: Story = {
  argTypes: {
    status: {
      control: false,
    },
  },
  render: (args) => (
    <div className="flex space-x-4">
      <Badge status="normal" {...omit(args, "status")} />
      <Badge status="success" {...omit(args, "status")} />
      <Badge status="danger" {...omit(args, "status")} />
      <Badge status="warning" {...omit(args, "status")} />
    </div>
  ),
};
