import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { InputQuantity, InputQuantityProps } from "@components/Form";

type Story = StoryObj<InputQuantityProps>;

const meta: Meta<InputQuantityProps> = {
  title: "Company/Form/QuantityInput",
  component: InputQuantity,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="grid w-1/3 gap-y-4">
        <Story />
      </div>
    ),
  ],
  args: {
    min: 0,
    max: 10,
    onChange: action("change"),
  },
};

export default meta;

const QuantityInputStory = ({ value: valueProp, ...props }: InputQuantityProps) => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    action("onChange")(e);
  }, []);

  useEffect(() => {
    if (!valueProp) return;

    setValue(Number(valueProp));
  }, [valueProp]);

  return (
    <InputQuantity
      className="block"
      value={value}
      onChange={handleChange}
      {...omit(props, "value", "onChange", "className")}
    />
  );
};

export const Basic: Story = {
  args: {
    value: 2,
    error: "The value must be greater than or equal to 0.",
  },
  render: (props) => (
    <>
      <QuantityInputStory {...omit(props, "value", "error")} />
      <QuantityInputStory {...omit(props, "error")} />
      <QuantityInputStory min={-10} value={-2} {...omit(props, "value", "min")} />
    </>
  ),
};
