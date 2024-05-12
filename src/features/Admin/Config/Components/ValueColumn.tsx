import { memo } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { ConfigDataType } from "@interfaces/Common";
import { ConfigDataTypeEnum } from "@enums/configEnum";
import TableImageColumn from "@components/Table/TableImageColumn";
import { TableImageColumnTypeEnum } from "@enums/commonEnum";
import TableContentColumnsListImage from "@components/Table/TableContentColumnsListImage";

interface ValueColumnProps {
  config: ConfigDataType;
}

const ValueColumn = ({ config }: ValueColumnProps) => {
  const { t } = useTranslation();
  if (config?.datatype === ConfigDataTypeEnum.NUMBER) {
    return <div className="text-blue-500">{config.value}</div>;
  }
  if (config?.datatype === ConfigDataTypeEnum.IMAGE) {
    return <TableImageColumn type={TableImageColumnTypeEnum.BOX} src={config.value} />;
  }
  if (config?.datatype === ConfigDataTypeEnum.BOOLEAN) {
    return (
      <div className={twMerge(config.value ? "text-blue-700" : "text-red-700")}>
        {config.value ? t("on") : t("off")}
      </div>
    );
  }

  if (config?.datatype === ConfigDataTypeEnum.IMAGES) {
    return <TableContentColumnsListImage images={(config.value as unknown as string[]) || []} />;
  }
  return <div>{config.value}</div>;
};

export default memo(ValueColumn);
