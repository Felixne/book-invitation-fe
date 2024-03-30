import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { ReactNode, useCallback, useState } from "react";

import { Button } from "@components/Button";
import { ConfirmationModal } from "@components/Modal";
import { ConfirmationModalProps } from "@components/Modal/interface";

type Story = StoryObj<ConfirmationModalProps>;
type ConfirmationModalStoryProps = ConfirmationModalProps & {
  children?: ReactNode;
  isThrowError?: boolean;
};

const meta: Meta<ConfirmationModalProps> = {
  title: "Company/Modal/Confirmation",
  component: ConfirmationModal,
  args: {
    title: "Delete Project <span>E-Commerce</span>",
    message: "Are you sure you want to delete this project? This action cannot be undone.",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
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

const ConfirmationModalStory = ({ children, isThrowError, ...args }: ConfirmationModalStoryProps) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = useCallback(() => {
    setIsShowModal(true);
  }, []);

  const handleConfirm = useCallback(() => {
    action("onConfirm")();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isThrowError) {
          reject(new Error("This is an error message thrown from the confirmation modal."));
        } else {
          resolve(true);
        }
      }, 1000);
    });
  }, [isThrowError]);

  const handleClose = useCallback(() => {
    setIsShowModal(false);
    action("onClose")();
  }, []);

  return (
    <>
      <Button onClick={handleClick}>{children ?? "Click Here"}</Button>
      <ConfirmationModal
        isOpen={isShowModal}
        onClose={handleClose}
        onConfirm={handleConfirm}
        {...omit(args, "isOpen", "onConfirm", "onClose")}
      />
    </>
  );
};

export const Basic: Story = {
  args: {
    isOpen: false,
    title: "Delete Project E-Commerce",
    status: "normal",
    onConfirm: action("onConfirm"),
    onClose: action("onClose"),
  },
  render: ConfirmationModalStory,
};

export const Status: Story = {
  args: {
    isOpen: false,
    title: "Delete Project E-Commerce",
  },
  render: (args) => (
    <>
      <ConfirmationModalStory status="normal" {...omit(args, "status")}>
        Normal
      </ConfirmationModalStory>
      <ConfirmationModalStory status="success" {...omit(args, "status")}>
        Success
      </ConfirmationModalStory>
      <ConfirmationModalStory status="danger" {...omit(args, "status")}>
        Danger
      </ConfirmationModalStory>
      <ConfirmationModalStory status="warning" {...omit(args, "status")}>
        Warning
      </ConfirmationModalStory>
    </>
  ),
};

export const HighlightHeader: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => (
    <>
      <ConfirmationModalStory status="normal" {...omit(args, "status")}>
        Normal
      </ConfirmationModalStory>
      <ConfirmationModalStory status="success" {...omit(args, "status")}>
        Success
      </ConfirmationModalStory>
      <ConfirmationModalStory status="danger" {...omit(args, "status")}>
        Danger
      </ConfirmationModalStory>
      <ConfirmationModalStory status="warning" {...omit(args, "status")}>
        Warning
      </ConfirmationModalStory>
    </>
  ),
};

export const Warning: Story = {
  args: {
    isOpen: false,
    status: "danger",
    warningMessage: "All resources related to this project will be deleted.",
    onConfirm: action("onConfirm"),
    onClose: action("onClose"),
  },
  render: ConfirmationModalStory,
};

export const ErrorHandler: Story = {
  name: "Error",
  args: {
    isOpen: false,
    status: "danger",
    onConfirm: action("onConfirm"),
    onClose: action("onClose"),
  },
  render: (args) => <ConfirmationModalStory isThrowError {...args} />,
};
