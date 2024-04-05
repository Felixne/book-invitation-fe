import { DataStatusEnum } from "@enums/commonEnum";
import { UserRoleEnum } from "@enums/userEnum";

import { BaseDataType, Nullable } from "./commonType";

export interface UserRoleDataType {
  uuid: number;
  name: UserRoleEnum;
}

export interface UserDataType extends BaseDataType {
  name: string;
  email: string;
  username: string;
  role: UserRoleDataType;
  role_uuid?: number;
  status: DataStatusEnum;
  email_verified_at: Date;
}

export interface UserFormDataType extends Nullable<Partial<UserDataType>> {
  password?: string;
}
