import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Input, Toggle } from "@components/Form";
import { FormControlType } from "@components/Form/interface";
import { ConfigDataTypeEnum } from "@enums/configEnum";
import UploadInput from "@components/Form/UploadInput/UploadInput";

interface ValueConfigInputProps {
  control: FormControlType;
  type?: ConfigDataTypeEnum | null;
  isSubmitting: boolean;
}

const ValueConfigInput = ({ control, type, isSubmitting }: ValueConfigInputProps) => {
  const { t } = useTranslation();
  if (type === ConfigDataTypeEnum.NUMBER) {
    return (
      <Input
        className="block w-full"
        control={control}
        disabled={isSubmitting}
        label={t("value")}
        name="value"
        type="number"
      />
    );
  }
  if (type === ConfigDataTypeEnum.IMAGE) {
    return (
      <UploadInput
        containerClassName="w-full"
        name="value"
        control={control}
        disabled={isSubmitting}
        multiple={false}
        label={t("value")}
        placeholder={t("chooseImage")}
      />
    );
  }
  if (type === ConfigDataTypeEnum.IMAGES) {
    return (
      <UploadInput
        containerClassName="w-full"
        name="value"
        control={control}
        disabled={isSubmitting}
        multiple
        label={t("value")}
        placeholder={t("chooseImage")}
      />
    );
  }
  if (type === ConfigDataTypeEnum.BOOLEAN) {
    return (
      <div className="w-full hover:border-blue-700 h-[54px]  flex px-4 items-center justify-end border-gray-100 rounded-lg border-2">
        <Toggle className="block w-full" control={control} disabled={isSubmitting} name="value" />
      </div>
    );
  }
  return (
    <Input
      className="block w-full"
      control={control}
      disabled={isSubmitting}
      label={t("value")}
      name="value"
    />
  );
};
export default memo(ValueConfigInput);
