import { memo } from "react";
import { useTranslation } from "react-i18next";

const OrderTotal = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full xs:text-sm md:text-base rounded-b-xl xs:p-2 md:p-6 pt-0">
      <div className="w-full h-fit flex py-4 border-b-2 border-gray-100 justify-between font-semibold">
        <div>{t("subTotal")}</div>
        <div>{`${2000} đ`}</div>
      </div>
      <div className="w-full h-fit flex py-4 border-b-2 border-gray-100 justify-between font-semibold">
        <div>{t("shipping")}</div>
        <div>{`${15000} đ`}</div>
      </div>
      <div className="w-full h-fit pt-4 flex justify-between font-semibold">
        <div>{t("total")}</div>
        <div>{`${2000} đ`}</div>
      </div>
    </div>
  );
};
export default memo(OrderTotal);
