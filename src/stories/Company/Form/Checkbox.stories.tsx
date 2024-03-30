import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { ChangeEvent, useCallback, useState } from "react";

import { Checkbox, CheckboxProps } from "@components/Form";

type Story = StoryObj<CheckboxProps>;

const meta: Meta<CheckboxProps> = {
  title: "Company/Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Checkbox",
    checked: false,
  },
  decorators: [
    (Story) => (
      <div className="grid w-1/3 gap-y-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const ControlledCheckboxStory = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    action("onChange")(e);
  }, []);

  return (
    <Checkbox
      checked={isChecked}
      onChange={handleChange}
      {...omit(props, "onPointerLeaveCapture", "onPointerEnterCapture", "className", "checked", "onChange")}
    />
  );
};

export const Basic: Story = {
  render: (props) => (
    <>
      <Checkbox
        className="group"
        {...omit(props, "onPointerLeaveCapture", "onPointerEnterCapture", "className")}
      />
      <ControlledCheckboxStory
        label="Default checked checkbox"
        {...omit(props, "onPointerLeaveCapture", "onPointerEnterCapture", "className", "label", "checked")}
      />
      <ControlledCheckboxStory
        label="Disabled checkbox"
        disabled
        {...omit(props, "onPointerLeaveCapture", "onPointerEnterCapture", "className", "label", "disabled")}
      />
    </>
  ),
};
