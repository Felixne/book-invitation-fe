import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { useCallback } from "react";
import { IoStarOutline } from "react-icons/io5";

import { Button } from "@components/Button";
import { Dropdown, DropdownItem, DropdownProps, DropdownProvider } from "@components/Dropdown";

type Story = StoryObj<DropdownProps>;
interface DropdownStoryProps extends DropdownProps {
  label?: string;
}

const meta: Meta<DropdownProps> = {
  title: "Company/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <DropdownProvider />
        <Story />
      </div>
    ),
  ],
  args: {
    position: "left",
  },
  argTypes: {
    menu: {
      control: false,
    },
  },
};

export default meta;

const DropdownStory = ({ label, ...props }: DropdownStoryProps) => {
  const handleClickItem = useCallback(() => {
    action("onClick")({ from: "First option" });
  }, []);

  return (
    <Dropdown
      menu={
        <div>
          <DropdownItem text="First option" icon={<IoStarOutline />} onClick={handleClickItem} />
          <DropdownItem text="This is a second option" icon={<IoStarOutline />} onClick={handleClickItem} />
        </div>
      }
      {...omit(props, "menu")}
    >
      <Button>{label ?? "Dropdown Trigger"}</Button>
    </Dropdown>
  );
};

export const Basic: Story = {
  render: DropdownStory,
};

export const Position: Story = {
  argTypes: {
    position: {
      control: false,
    },
  },
  render: (args) => (
    <div className="flex space-x-5">
      <DropdownStory position="left" label="Left Dropdown" {...omit(args, "position")} />
      <DropdownStory position="right" label="Right Dropdown" {...omit(args, "position")} />
    </div>
  ),
};
