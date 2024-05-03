import { Key, memo, useCallback } from "react";
import { GrLocation } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";

import { BillingAddressDataType } from "@interfaces/Common/billingAddressType";

interface BillingAddressItemProps {
  billingAddress: BillingAddressDataType;
  onClickEdit: (id: Key) => void;
}

const BillingAddressItem = ({ billingAddress, onClickEdit }: BillingAddressItemProps) => {
  const hanleClickEdit = useCallback(() => {
    onClickEdit(billingAddress.uuid);
  }, [onClickEdit, billingAddress]);
  return (
    <div className="w-full h-fit p-2 gap-x-2 grid grid-cols-7 border-2 border-gray-100 rounded-md">
      <div className="col-span-1 h-full flex items-center justify-center">
        <GrLocation size={20} />
      </div>
      <div className="col-span-6 text-sm relative">
        <div className="flex w-full gap-x-2 ">
          <div className="w-fit font-semibold leading-4 min-h-4">{billingAddress.name}</div>
          <div className="w-fit pl-2 border-l-2 leading-4 h-4">{billingAddress.phone}</div>
        </div>
        <div className="w-full mt-1 h-fit text-blue-500">{`${billingAddress.city}-${billingAddress.district}-${billingAddress.ward}-${billingAddress.address}`}</div>
        <div
          role="button"
          tabIndex={0}
          onClick={hanleClickEdit}
          className="absolute z-10 hover:bg-primary-100 hover:text-primary-700 p-1.5 top-1 right-1 border rounded-md"
        >
          <FiEdit2 size={12} />
        </div>
      </div>
    </div>
  );
};
export default memo(BillingAddressItem);
