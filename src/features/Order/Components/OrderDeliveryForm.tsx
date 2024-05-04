import { Key, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@components/Button";
import useToast from "@hooks/useToast";
import { BillingAddressDataType } from "@interfaces/Common/billingAddressType";
import {
  createBillingAddress,
  editBillingAddress,
  getBillingAddresses,
} from "@services/App/billingAddressService";
import { LoadingSkeleton } from "@components/Loading";

import BillingAddressItem from "./BillingAddressItem";
import ModificationDeliveryModal from "./ModificationDeliveryModal.tsx";

const OrderDeliveryForm = () => {
  const { t } = useTranslation();
  const [billingAddressData, setBillingAddressData] = useState<BillingAddressDataType[]>([]);
  const [isShowModificationModal, setIsShowModificationModal] = useState(false);
  const [selectedBillingAddressId, setSelectedBillingAddressId] = useState<Key | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const selectedBillingAddress = useMemo(() => {
    return billingAddressData.find((item) => item.uuid === selectedBillingAddressId) ?? null;
  }, [selectedBillingAddressId, billingAddressData]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await getBillingAddresses();
      setBillingAddressData(data);
    } catch (error) {
      toast.error(t("unknown"));
    } finally {
      setIsLoading(false);
    }
  }, [toast, t]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleEditButton = useCallback((id: Key) => {
    setSelectedBillingAddressId(id);
    setIsShowModificationModal(true);
  }, []);
  const handleAddButton = useCallback(() => {
    setIsShowModificationModal(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsShowModificationModal(false);
    setSelectedBillingAddressId(null);
  }, []);
  return (
    <div className="xs:col-span-5 xs:text-sm md:text-base lg:col-span-2 h-fit xs:p-2 md:p-6  xs:border-none xs:border-0 md:border-2 md:border-gray-100 rounded-xl flex flex-wrap xs:gap-2 md:gap-6">
      <div className="w-fit xs:text-lg md:text-xl h-fit mb-2 font-semibold relative before:w-full before:h-0.5 before:absolute before:bg-gray-50 before:rounded-full before:-bottom-1 before:left-0">
        {t("delivery")}
      </div>
      <div />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="w-full h-fit flex flex-wrap gap-4">
          {billingAddressData?.map((item) => (
            <BillingAddressItem onClickEdit={handleEditButton} key={item.uuid} billingAddress={item} />
          ))}
        </div>
      )}
      <Button onClick={handleAddButton} className="w-full h-10">
        {t("addBillingAddress")}
      </Button>
      <ModificationDeliveryModal
        isOpen={isShowModificationModal}
        onClose={handleClose}
        billingAddress={selectedBillingAddress as BillingAddressDataType}
        onCreate={createBillingAddress}
        onEdit={editBillingAddress}
        onCreated={fetchData}
        onEdited={fetchData}
      />
    </div>
  );
};
export default memo(OrderDeliveryForm);
