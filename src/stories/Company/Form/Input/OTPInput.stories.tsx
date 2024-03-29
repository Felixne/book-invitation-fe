import { Meta, StoryObj } from "@storybook/react";

import { InputOTP, InputOTPProps } from "@components/Form";

type Story = StoryObj<InputOTPProps>;

const meta: Meta<InputOTPProps> = {
  title: "Company/Form/OTPInput",
  component: InputOTP,
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

export const Basic: Story = {
  render: (props) => <InputOTP {...props} />,
};
