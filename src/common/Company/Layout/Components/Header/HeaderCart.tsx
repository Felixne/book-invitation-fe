import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import useToast from "@hooks/useToast";
import { CartDataType } from "@interfaces/Common/cartType";
import useSelector from "@hooks/useSelector";

import { getCarts } from "../../../../../app/Services/App/cartService";

const HeaderCart = () => {
  const { cart } = useSelector((state) => state.common);
  const [carts, setCarts] = useState<CartDataType[]>([]);
  const { t } = useTranslation();
  const toast = useToast();
  const cartQuantity = useMemo(() => carts.reduce((prev, item) => prev + item.quantity, 0), [carts]);

  const fetchData = useCallback(async () => {
    if (!cart) return;
    try {
      const data = await getCarts({
        expand: ["cart__product", "cart_item__product"],
      });
      setCarts(data.products.map((item) => ({ product_uuid: item.product_uuid, quantity: item.quantity })));
    } catch (error) {
      toast.error(t("unknown"));
    }
  }, [t, toast, cart]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Link to="order">
      <div className="text-2xl relative text-slate-700 group hover:text-primary-500">
        <MdOutlineShoppingCart />
        <div
          className={twMerge(
            "min-w-4 px-1 h-4 absolute group-hover:border-primary-500 font-semibold text-xs -top-1 -right-1 bg-white border-slate-700 flex items-center justify-center rounded-full border-2",
            cartQuantity > 9 && "-right-2",
            cartQuantity > 99 && "-right-4",
          )}
        >
          {cartQuantity || 0}
        </div>
      </div>
    </Link>
  );
};
export default memo(HeaderCart);
