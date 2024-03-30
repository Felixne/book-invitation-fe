import { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from "@components/Avatar";

const meta: Meta<AvatarProps> = {
  title: "Company/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-start justify-start">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    alt: "Avatar Basic",
    src: "https://file.storage.techupzone.com/linkstar-stg/public/upload/172c0b78-b1f0-46b9-8197-349032f551b2_1676347703.png",
  },
};

export const Skeleton: Story = {
  args: {
    alt: "Avatar Skeleton",
    skeleton: true,
  },
};
