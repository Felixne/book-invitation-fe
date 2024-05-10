import { memo } from "react";

import { Modal } from "@components/Modal";

interface ProductPreviewImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const ProductPreviewImageModal = ({ isOpen, onClose, image }: ProductPreviewImageModalProps) => {
  return (
    <Modal
      pannelClassName="bg-transparent"
      className="md:px-0 xs:px-4"
      childrenClassName="py-0 md:w-96 xs:w-full"
      isOpen={isOpen}
      onClose={onClose}
      isShowFooter={false}
      isShowHeader={false}
    >
      <img src={image} alt={image} className="w-full h-full  md:object-scale-down" />
    </Modal>
  );
};
export default memo(ProductPreviewImageModal);
