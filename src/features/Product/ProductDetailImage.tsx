import "swiper/css";
import { memo, useCallback, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <div className="w-96 h-fit py-6">
            <Swiper
              spaceBetween={4}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {isLoading && productData?.detail_images?.length === 0 && (
                <div className="w-full flex grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_1, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <LoadingSkeleton key={index} className="col-span-1 h-28 rounded-xl" />
                  ))}
                </div>
              )}
              {productData?.detail_images?.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SwiperSlide key={index}>
                  <ProductImage
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="w-28 h-28"
                    alt={item}
                    src={item}
                    onClickImage={handleClickImg}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <ProductPreviewImageModal isOpen={isShowPreviewModal} onClose={handleClose} image={selectedImg} />
    </>
  );
};
export default memo(ProductDetailImage);
