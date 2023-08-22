/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDevices = /* GraphQL */ `
  query SyncDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDevices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
