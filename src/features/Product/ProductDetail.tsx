import { isUndefined } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ProductDataType } from "@interfaces/Common/productType";
import { getProductById } from "@services/App/productService";

import ProductDetailImage from "./ProductDetailImage";
import ProductDetailDescription from "./ProductDetailDescription";

const ProductDetail = () => {
  const { pathname } = useLocation();

  const [productData, setProductData] = useState<ProductDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchData = useCallback(async () => {
    const productId = pathname.split("/").at(-1);
    if (isUndefined(productId)) return;
    try {
      const data = await getProductById(Number(productId));
      setProductData(data);
    } finally {
      setIsLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full h-fit xs:p-6 md:p- lg:p-20 ">
      <div className="w-full grid grid-cols-2 h-fit xs:gap-x-0 md:gap-x-6 lg:gap-x-0">
        <ProductDetailImage productData={productData} isLoading={isLoading} />
        <ProductDetailDescription productData={productData} isLoading={isLoading} />
      </div>
    </div>
  );
};
export default ProductDetail;
