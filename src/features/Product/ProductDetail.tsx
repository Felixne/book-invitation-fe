import { isUndefined } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ProductDataType } from "@interfaces/Common/productType";
import { getProductById } from "@services/App/productService";
import { Button } from "@components/Button";

const ProductDetail = () => {
  const { pathname } = useLocation();

  const [productData, setProductData] = useState<ProductDataType | null>(null);
  const fetchData = useCallback(async () => {
    const productId = pathname.split("/").at(-1);
    if (isUndefined(productId)) return;
    const data = await getProductById(productId);
    setProductData(data);
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="w-full h-screen p-20">
      <div className="w-full grid grid-cols-2">
        <div className="col-span-1 h-fit">
          <div className="w-full h-fit flex items-center justify-center">
            <img
              className="w-96 h-60 object-cover object-center rounded-xl"
              alt={productData?.name}
              src={productData?.image}
            />
          </div>
          <div className="flex py-6 justify-center items-center gap-x-6">
            <img
              className="w-28 h-28 object-cover object-center rounded-xl"
              alt={productData?.name}
              src={productData?.image}
            />
            <img
              className="w-28 h-28 object-cover object-center rounded-xl"
              alt={productData?.name}
              src={productData?.image}
            />
            <img
              className="w-28 h-28 object-cover object-center rounded-xl"
              alt={productData?.name}
              src={productData?.image}
            />
          </div>
        </div>
        <div className="col-span-1 h-96">
          <div className="text-2xl font-bold uppercase">{productData?.name}</div>
          <div className="font-semibold py-2 text-gray-400">Simple card</div>
          <div className="font-semibold">{`${productData?.price} đ`}</div>
          <div className="w-96 pt-2 text-gray-500">{productData?.description}</div>
          <div className="w-96 my-6 h-0.5 rounded-full bg-gray-100" />
          <div className="w-96 h-fit">
            <div className="font-semibold ">QUANTITY</div>
            <div className="w-40 my-2 h-10 ">
              <div className="flex items-center justify-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </div>
                <span id="counter" className="text-lg font-semibold mx-4">
                  1
                </span>
                <div className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-pink-200 hover:bg-pink-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                  </svg>
                </div>
              </div>
            </div>
            <Button color="light" className="w-80">
              ADD TO CARD
            </Button>
          </div>
          <div className="w-96 my-8 h-0.5 rounded-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
