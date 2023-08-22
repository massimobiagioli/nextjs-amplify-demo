/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeviceInput = {
  id?: string | null,
  name: string,
  address: string,
  is_active?: boolean | null,
  _version?: number | null,
};

export type ModelDeviceConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  is_active?: ModelBooleanInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Device = {
  __typename: "Device",
  id: string,
  name: string,
  address: string,
  is_active?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateDeviceInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  is_active?: boolean | null,
  _version?: number | null,
};

export type DeleteDeviceInput = {
  id: string,
  _version?: number | null,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  is_active?: ModelBooleanInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items:  Array<Device | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionDeviceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  is_active?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
  or?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateDeviceMutationVariables = {
  input: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetDeviceQueryVariables = {
  id: string,
};

export type GetDeviceQuery = {
  getDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      address: string,
      is_active?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDevicesQuery = {
  syncDevices?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      address: string,
      is_active?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
  owner?: string | null,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDeviceSubscription = {
  onUpdateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDeviceSubscription = {
  onDeleteDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    address: string,
    is_active?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
