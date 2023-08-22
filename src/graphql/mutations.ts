/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      name
      address
      is_active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      name
      address
      is_active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      name
      address
      is_active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
