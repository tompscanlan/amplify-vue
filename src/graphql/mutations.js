/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShortUrls = /* GraphQL */ `
  mutation CreateShortUrls(
    $input: CreateShortUrlsInput!
    $condition: ModelShortUrlsConditionInput
  ) {
    createShortUrls(input: $input, condition: $condition) {
      id
      originalUrl
      shortUrl
      clicks
      lastClickDate
      createdOnDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateShortUrls = /* GraphQL */ `
  mutation UpdateShortUrls(
    $input: UpdateShortUrlsInput!
    $condition: ModelShortUrlsConditionInput
  ) {
    updateShortUrls(input: $input, condition: $condition) {
      id
      originalUrl
      shortUrl
      clicks
      lastClickDate
      createdOnDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteShortUrls = /* GraphQL */ `
  mutation DeleteShortUrls(
    $input: DeleteShortUrlsInput!
    $condition: ModelShortUrlsConditionInput
  ) {
    deleteShortUrls(input: $input, condition: $condition) {
      id
      originalUrl
      shortUrl
      clicks
      lastClickDate
      createdOnDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
