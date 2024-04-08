import { memo } from "react";

import { ProductDataType } from "@interfaces/Common/productType";
import { LoadingSkeleton } from "@components/Loading";

interface ProductDetailImageProps {
  productData: ProductDataType | null;
  isLoading: boolean;
}

const ProductDetailImage = ({ productData, isLoading }: ProductDetailImageProps) => {
  return (
    <div className="xs:col-span-2 md:col-span-1 h-fit">
      <div className="w-full h-fit flex items-center justify-center">
        {isLoading ? (
          <LoadingSkeleton className="w-96 h-60  rounded-xl" />
        ) : (
          <img
            className="w-96 h-60 object-cover object-center rounded-xl"
            alt={productData?.name}
            src={productData?.image}
          />
        )}
      </div>
      <div className="w-full h-fit flex items-center justify-center">
        <div className="py-6 h-fit w-96 justify-center grid grid-cols-3 items-center gap-x-6">
          {isLoading ? (
            Array.from({ length: 3 }).map((_1, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <LoadingSkeleton key={index} className="col-span-1 h-28 rounded-xl" />
            ))
          ) : (
            <>
              <div className="col-span-1 h-full">
                <img
                  className="w-full h-28 object-cover object-center rounded-xl"
                  alt={productData?.name}
                  src={productData?.image}
                />
              </div>
              <div className="col-span-1 h-full">
                <img
                  className="w-full h-28 object-cover object-center rounded-xl"
                  alt={productData?.name}
                  src={productData?.image}
                />
              </div>
              <div className="col-span-1 h-full">
                <img
                  className="w-full h-28 object-cover object-center rounded-xl"
                  alt={productData?.name}
                  src={productData?.image}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(ProductDetailImage);
