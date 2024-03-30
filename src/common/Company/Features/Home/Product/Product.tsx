import { useCallback, useEffect, useState } from "react";

import { Button } from "@components/Button";
import { ProductDataType } from "@interfaces/Common/productType";
import { getProducts } from "@services/App/productService";

import ProductItem from "./ProductItem";

const Product = () => {
  const [productData, setProductData] = useState<ProductDataType[]>([]);

  const fetchData = useCallback(async () => {
    const res = await getProducts();
    setProductData(res);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="px-40">
      <div className="w-full h-fit  grid grid-cols-4 gap-8">
        {productData.map((item) => (
          <ProductItem key={item.uuid} product={item} />
        ))}
      </div>
      <div className="w-full py-8 flex justify-center items-center">
        <div className="w-40 h-10">
          <Button color="light" className="w-full h-full">
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
