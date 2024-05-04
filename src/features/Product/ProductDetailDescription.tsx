import { memo } from "react";

import { ProductDataType } from "@interfaces/Common/productType";
import { LoadingSkeleton } from "@components/Loading";
import { commonSelector } from "@selectors/index";
import useSelector from "@hooks/useSelector";

import ProductDetailQuantity from "./ProductDetailQuantity";
import ProductDetailContact from "./ProductDetailContact";

interface ProductDetailImageProps {
  productData: ProductDataType | null;
  isLoading: boolean;
}
const ProductDetailDescription = ({ productData, isLoading }: ProductDetailImageProps) => {
  const statusOrder = useSelector(commonSelector.statusOrderSelector);
  return (
    <div className="xs:col-span-2 md:col-span-1 xs:h-fit md:h-96">
      {isLoading ? (
        <LoadingSkeleton className="xs:w-full md:w-96" />
      ) : (
        <div className="xs:w-full md:w-96">
          <div className="text-2xl font-bold uppercase">{productData?.name}</div>
          <div className="font-semibold py-2 text-gray-400">Simple card</div>
          <div className="font-semibold">{`${productData?.price} đ`}</div>
          <div className="w-full pt-2 text-gray-500">{productData?.description}</div>
          <div className="w-full my-6 h-0.5 rounded-full bg-gray-100" />
          {Boolean(statusOrder) && <ProductDetailQuantity product={productData} />}
          {Boolean(!statusOrder) && <ProductDetailContact />}
          <div className="w-full my-8 h-0.5 rounded-full bg-gray-100" />
        </div>
      )}
    </div>
  );
};
export default memo(ProductDetailDescription);
