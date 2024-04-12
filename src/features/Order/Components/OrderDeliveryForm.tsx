import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@components/Form";
import { Button } from "@components/Button";

const OrderDeliveryForm = () => {
  const { t } = useTranslation();
  return (
    <div className="xs:col-span-5 xs:text-sm md:text-base lg:col-span-2 h-fit xs:p-2 md:p-6 border-2 border-gray-100 rounded-xl flex flex-wrap xs:gap-2 md:gap-6">
      <div className="w-fit xs:text-lg md:text-xl h-fit mb-2 font-semibold relative before:w-full before:h-0.5 before:absolute before:bg-gray-50 before:rounded-full before:-bottom-1 before:left-0">
        {t("delivery")}
      </div>
      <Input className="block w-full" label={t("name")} name="name" />
      <Input className="block w-full" label={t("address")} name="address" />
      <Input className="block w-full" label={t("phone")} name="phone" />
      <Button className="w-full h-12 mt-4">{t("placeOrder")}</Button>
    </div>
  );
};
export default memo(OrderDeliveryForm);
