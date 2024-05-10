import { memo } from "react";

import { ConfigDataType } from "@interfaces/Common";
import { ConfigDataTypeEnum } from "@enums/configEnum";
import TableImageColumn from "@components/Table/TableImageColumn";
import { TableImageColumnTypeEnum } from "@enums/commonEnum";
import { Toggle } from "@components/Form";
import TableContentColumnsListImage from "@components/Table/TableContentColumnsListImage";

interface ValueColumnProps {
  config: ConfigDataType;
}

const ValueColumn = ({ config }: ValueColumnProps) => {
  if (config?.datatype === ConfigDataTypeEnum.NUMBER) {
    return <div className="text-blue-500">{config.value}</div>;
  }
  if (config?.datatype === ConfigDataTypeEnum.IMAGE) {
    return <TableImageColumn type={TableImageColumnTypeEnum.BOX} src={config.value} />;
  }
  if (config?.datatype === ConfigDataTypeEnum.BOOLEAN) {
    return <Toggle isOn={Boolean(config.value)} />;
  }

  if (config?.datatype === ConfigDataTypeEnum.IMAGES) {
    return <TableContentColumnsListImage images={(config.value as unknown as string[]) || []} />;
  }
  return <div>{config.value}</div>;
};

export default memo(ValueColumn);
