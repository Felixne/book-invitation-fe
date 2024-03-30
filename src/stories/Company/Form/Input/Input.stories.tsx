import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { Input, InputProps } from "@components/Form";

type Story = StoryObj<InputProps>;

const meta: Meta<InputProps> = {
  title: "Company/Form/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="grid w-1/3 gap-y-5">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const InputStory = ({ value: valueProp, ...props }: InputProps) => {
  const [value, setValue] = useState<typeof valueProp>("");

  const handleChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (valueProp) setValue(valueProp);
  }, [valueProp]);

  return (
    <Input
      className="block"
      value={value}
      onChange={handleChangeValue}
      {...omit(props, "value", "onChange", "className")}
    />
  );
};

export const Basic: Story = {
  render: (props) => (
    <>
      <InputStory label="Label" {...omit(props, "label", "placeholder")} />
      <InputStory
        placeholder="Placeholder"
        label="Label and Placeholder"
        {...omit(props, "label", "placeholder")}
      />
      <InputStory label="With input prefix" {...omit(props, "label", "placeholder")}>
        <span className="mr-1 flex flex-shrink-0 items-center text-slate-400">Prefix -</span>
      </InputStory>
      <InputStory
        name="input-with-label-tooltip"
        label="With label tooltip"
        tooltip="Tooltip"
        {...omit(props, "label", "placeholder", "name", "tooltip")}
      />
      <InputStory label="With value" value="Something..." {...omit(props, "label", "value")} />
      <InputStory
        label="Error"
        value="This value is invalid"
        error="Please enter a valid field."
        {...omit(props, "label", "value", "error")}
      />
    </>
  ),
};
