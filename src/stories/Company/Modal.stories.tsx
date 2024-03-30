import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { omit } from "lodash";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@components/Button";
import { Input } from "@components/Form";
import { Modal } from "@components/Modal";
import { ModalProps } from "@components/Modal/interface";

type Story = StoryObj<ModalProps>;

const meta: Meta<ModalProps> = {
  title: "Company/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    children: "Modal Content Here...",
    onConfirm: action("onConfirm"),
    onClose: action("onClose"),
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

const ModalStory = ({ isOpen, ...args }: ModalProps) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = useCallback(() => {
    setIsShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsShowModal(false);
    action("onClose")();
  }, []);

  useEffect(() => {
    setIsShowModal(isOpen);
  }, [isOpen]);

  return (
    <>
      <Button onClick={handleClick}>Click Here</Button>
      <Modal isOpen={isShowModal} onClose={handleClose} {...omit(args, "onClose", "isOpen")} />
    </>
  );
};

export const Basic: Story = {
  args: {
    isOpen: false,
    title: "Modal Basic",
  },
  render: ModalStory,
};

export const ShowOnStartup: Story = {
  args: {
    isOpen: true,
    title: "Modal Show On Startup",
  },
  render: ModalStory,
};

export const WithoutHeader: Story = {
  args: {
    isOpen: false,
    isShowHeader: false,
  },
  render: ModalStory,
};

export const WithoutFooter: Story = {
  args: {
    isOpen: false,
    title: "Modal Without Footer",
    isShowFooter: false,
  },
  render: ModalStory,
};

export const Form: Story = {
  args: {
    isOpen: false,
    title: "Modal Form",
    isFormModal: true,
    children: (
      <div className="grid gap-y-5">
        <div>
          This is a form modal. You can put any form element here. It will link the confirm button to the form
          submit event.
        </div>
        <Input name="input" label="Input" className="block" readOnly />
      </div>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  render: ModalStory,
};
