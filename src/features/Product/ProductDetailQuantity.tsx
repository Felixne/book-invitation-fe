import { memo, useCallback, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "@components/Button";
import useDispatch from "@hooks/useDispatch";
import { addToCart } from "@slices/commonSlice";
import { ProductDataType } from "@interfaces/Common/productType";
import useSelector from "@hooks/useSelector";
import { addCart } from "@services/App/cartService";
import useToast from "@hooks/useToast";

interface ProductDetailQuantityProps {
  product: ProductDataType | null;
}

const ProductDetailQuantity = ({ product }: ProductDetailQuantityProps) => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.common);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddQuantity = useCallback(() => {
    if (!product) return;
    setQuantity((prev) => prev + 1);
  }, [product]);

  const handleMinusQuantity = useCallback(() => {
    if (!product) return;
    setQuantity((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  }, [product]);

  const handleClickAddToCart = useCallback(async () => {
    if (!user) {
      navigate("/auth/login");
    }
    if (!product) return;
    try {
      await addCart({ product_uuid: product.uuid, quantity });
      dispatch(addToCart({ product_uuid: product.uuid, quantity }));
      toast.success(t("addToCartSuccessfully"));
    } catch {
      toast.error(t("unknown"));
    } finally {
      setQuantity(0);
    }
  }, [product, dispatch, quantity, user, toast, t, navigate]);
  return (
    <div className="w-full h-fit">
      <div className="font-semibold uppercase">{t("quantity")}</div>
      <div className="w-40 my-2 h-10 ">
        <div className="flex items-center justify-start">
          <div
            role="button"
            tabIndex={0}
            onClick={handleMinusQuantity}
            className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
          >
            <FiMinus />
          </div>
          <span className="text-lg font-semibold mx-4">{quantity}</span>
          <div
            role="button"
            tabIndex={0}
            onClick={handleAddQuantity}
            className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-primary-200 hover:bg-primary-300"
          >
            <FiPlus />
          </div>
        </div>
      </div>
      <Button onClick={handleClickAddToCart} color="light" className="xs:w-full md:w-2/3">
        {t("addToCart")}
      </Button>
    </div>
  );
};
export default memo(ProductDetailQuantity);
