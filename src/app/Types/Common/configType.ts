import { ConfigDataTypeEnum, ConfigStatusEnum, ConfigTypeEnum } from "../../Enums";
import { BaseDataType, Nullable } from "./commonType";

export interface ConfigStatusDataType {
  code: ConfigStatusEnum;
  name: string;
}

export interface ConfigGroupDataType extends BaseDataType {
  id: number;
  name: string;
}

export interface ConfigDataType extends BaseDataType {
  key: string;
  value: string;
  type: ConfigTypeEnum;
  description?: string;
  datatype?: ConfigDataTypeEnum;
}

export interface ConfigFormDataType extends Partial<Nullable<ConfigDataType>> {}

export interface ConfigGroupFormDataType extends Nullable<Omit<ConfigGroupDataType, "updated_at" | "id">> {}
