import { UnlockFormValues } from '@types';

export const getTokenMetadata = (
  data: UnlockFormValues & { address: string },
) =>
  JSON.stringify({
    types: {
      EIP712Domain: [
        {
          name: `name`,
          type: `string`,
        },
        {
          name: `version`,
          type: `string`,
        },
        {
          name: `chainId`,
          type: `uint256`,
        },
        {
          name: `verifyingContract`,
          type: `address`,
        },
        {
          name: `salt`,
          type: `bytes32`,
        },
      ],
    },
    domain: {
      name: `Unlock`,
      version: `1`,
    },
    primaryType: `UserMetaData`,
    message: {
      UserMetaData: {
        owner: data.address,
        data: {
          protected: {
            email: data.email,
            fullName: data.fullName,
            phone: data.phone,
            address_1: data.address1,
            address_2: data.address2,
            zipcode: data.zipcode,
            city: data.city,
            country: data.country,
          },
        },
      },
    },
  });
