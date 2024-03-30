import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@components/Button";

const meta: Meta<ButtonProps> = {
  title: "Company/Button",
  component: Button,
  args: {
    children: "Button",
    disabled: false,
    isLoading: false,
    size: "normal",
    onClick: action("click"),
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-start space-x-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    color: "primary",
  },
};

export const Color: Story = {
  argTypes: {
    color: {
      control: false,
    },
  },
  render: (args) => (
    <>
      <Button color="primary" {...args}>
        Primary
      </Button>
      <Button color="light" {...args}>
        Light
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <Button {...args}>Primary</Button>
      <Button color="light" {...args}>
        Light
      </Button>
    </>
  ),
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: false,
    },
    color: {
      control: false,
    },
  },
};

export const Size: Story = {
  render: (args) => (
    <>
      <Button {...args} size="normal">
        Normal
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="xs">
        Extra Small
      </Button>
    </>
  ),
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const Loading: Story = {
  render: (args) => (
    <>
      <Button {...args} isLoading>
        Loading
      </Button>
      <Button {...args} isLoading size="sm">
        Loading
      </Button>
      <Button {...args} isLoading size="xs">
        Loading
      </Button>
    </>
  ),
  argTypes: {
    isLoading: {
      control: false,
    },
    disabled: {
      control: false,
    },
    size: {
      control: false,
    },
  },
};
