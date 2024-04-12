import { memo } from "react";
import { useTranslation } from "react-i18next";

import { ProductInCartDataType } from "@interfaces/Common/cartType";

interface OrderCartItemProps {
  cartItem: ProductInCartDataType;
}

const OrderCartItem = ({ cartItem }: OrderCartItemProps) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-fit border-b-2 border-gray-100 xs:p-2 md:p-6 grid xs:grid-cols-3 md:grid-cols-2">
      <div className="xs:col-span-2 md:col-span-1 flex xs:gap-x-2 md:gap-x-6">
        <div className="xs:w-14 xs:h-20 md:w-20 md:h-28 rounded-md">
          <img
            src={cartItem.product?.image}
            alt={cartItem.product?.name}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex-auto h-full py-2">
          <div className="xs:text-sm md:text-lg font-semibold">{cartItem.product?.name}</div>
          <div className="xs:text-xs md:text-sm">{cartItem.product?.description}</div>
        </div>
      </div>
      <div className="col-span-1 flex justify-end py-2">
        <div className="w-fit h-full">
          <div className="xs:text-sm md:text-lg font-semibold">{`${cartItem.sub_total} đ`}</div>
          <div className="xs:text-xs md:text-sm">{t("qty", { quantity: cartItem.quantity })}</div>
        </div>
      </div>
    </div>
  );
};
export default memo(OrderCartItem);
