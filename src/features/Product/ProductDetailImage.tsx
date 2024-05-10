import { memo, useCallback, useState } from "react";

import { ProductDataType } from "@interfaces/Common/productType";
import { LoadingSkeleton } from "@components/Loading";

import ProductPreviewImageModal from "./ProductPreviewImageModal";
import ProductImage from "./ProductImage";

interface ProductDetailImageProps {
  productData: ProductDataType | null;
  isLoading: boolean;
}

const ProductDetailImage = ({ productData, isLoading }: ProductDetailImageProps) => {
  const [isShowPreviewModal, setIsShowPreviewModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string>("");
  const handleClickImg = useCallback((img: string) => {
    setSelectedImg(img);
    setIsShowPreviewModal(true);
  }, []);
  const handleClose = useCallback(() => {
    setSelectedImg("");
    setIsShowPreviewModal(false);
  }, []);
  return (
    <>
      <div className="xs:col-span-2 md:col-span-1 h-fit">
        <div className="w-full h-fit flex items-center justify-center">
          {isLoading ? (
            <LoadingSkeleton className="w-96 h-60  rounded-xl" />
          ) : (
            <ProductImage
              className="w-96 h-60"
              alt={productData?.image || ""}
              src={productData?.image || ""}
              onClickImage={handleClickImg}
            />
          )}
        </div>
        <div className="w-full h-fit flex items-center justify-center">
          <div className="py-6 h-fit w-96 justify-center grid grid-cols-3 items-center gap-6">
            {isLoading
              ? Array.from({ length: 3 }).map((_1, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <LoadingSkeleton key={index} className="col-span-1 h-28 rounded-xl" />
                ))
              : productData?.detail_images?.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="col-span-1 h-full">
                    <ProductImage
                      className="w-full h-28"
                      alt={item}
                      src={item}
                      onClickImage={handleClickImg}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <ProductPreviewImageModal isOpen={isShowPreviewModal} onClose={handleClose} image={selectedImg} />
    </>
  );
};
export default memo(ProductDetailImage);
