import { Link } from "react-router-dom";

import { PRODUCT_PATH } from "@constants/routeConstant";
import { ProductDataType } from "@interfaces/Common/productType";

interface ProductItemProps {
  product: ProductDataType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link to={`${PRODUCT_PATH.PRODUCT}/${product.uuid}`}>
      <div className="col-span-1 group rounded-xl border border-gray-100 hover:scale-105 hover:shadow-sm">
        <div className="w-full h-60 rounded-t-xl">
          <img className="w-full h-full object-fill rounded-t-xl" alt={product.name} src={product.image} />
        </div>
        <div className="w-full p-4">
          <div className="font-semibold">{product.name}</div>
          <div className="text-sm text-pink-400">{`${product.price} đ`}</div>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
