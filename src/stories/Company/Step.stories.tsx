import { Meta, StoryObj } from "@storybook/react";

import { Step, StepItem, StepProps } from "@components/Step";

const meta: Meta<StepProps> = {
  title: "Company/Step",
  component: Step,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StepProps>;

export const Basic: Story = {
  render: (args) => (
    <Step {...args}>
      <StepItem>First Step</StepItem>
      <StepItem>Second Step</StepItem>
      <StepItem>Third Step</StepItem>
    </Step>
  ),
  args: {
    current: 1,
  },
};
