import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";

import { CartsDataType } from "@interfaces/Common/cartType";
import { getCarts } from "@services/App/cartService";
import useToast from "@hooks/useToast";
import { TableContentBodyEmptyItem } from "@components/Table";
import { LoadingSkeleton } from "@components/Loading";

import OrderCartItem from "./Components/OrderCartItem";
import OrderTotal from "./Components/OrderTotal";
import OrderDeliveryForm from "./Components/OrderDeliveryForm";
import OrderBookingForm from "./Components/OrderBookingForm";

const OrderPage = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const [carts, setCarts] = useState<CartsDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const data = await getCarts({
        expand: ["cart__product", "cart_item__product"],
      });
      setCarts(data);
    } catch (error) {
      toast.error(t("unknown"));
    } finally {
      setIsLoading(false);
    }
  }, [t, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="xs:px-6 md:px-20 xl:px-40 py-8">
      <div className="w-full h-fit pb-8">
        <div className="w-full text-center h-fit text-2xl font-semibold">{t("order")}</div>
        <div className="text-sm font-thin text-center w-full ">{t("orderDescription")}</div>
      </div>
      {isEmpty(carts?.products) && !isLoading && <TableContentBodyEmptyItem className="h-96" />}
      {!isEmpty(carts?.products) && !isLoading && (
        <div className="w-full h-fit grid grid-cols-5 gap-6">
          <div className="xs:col-span-5 lg:col-span-3 h-fit rounded-xl  xs:border-0 md:border-2 border-gray-100">
            <div className="w-fit xs:text-lg xs:m-2 md:m-6 mb-0 md:text-xl h-fit font-semibold relative before:w-full before:h-0.5 before:absolute before:bg-gray-50 before:rounded-full before:-bottom-1 before:left-0">
              {t("allItem")}
            </div>
            {carts?.products.map((item) => <OrderCartItem key={item.uuid} cartItem={item} />)}
            <OrderTotal />
          </div>
          <OrderDeliveryForm />
        </div>
      )}
      {isEmpty(carts?.products) && isLoading && <LoadingSkeleton className="w-full rounded-xl h-96" />}

      <OrderBookingForm />
    </div>
  );
};
export default memo(OrderPage);
