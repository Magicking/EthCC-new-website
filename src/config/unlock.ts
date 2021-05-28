export const UNLOCK_PAYWALL_CONFIG = {
  network: 1,
  locks: {
    '0xe5B16563a38342A2C64EeBb436bc2Da4eC83a531': {
      name: `EthCC 4 Early Birds`,
    },
  },
  icon: `https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg`,
  callToAction: {
    default: `Purchase your ticket by clicking on 'Purchase' below. Your web3 wallet will ask you to confirm 2 transactions: one for the DAI transfer, and one for the ticket purchase.`,
  },
};

export const UNLOCK_PAYWALL_CONFIG_TESTNET = {
  network: 4,
  locks: {
    '0x2F81Ab829030D43dDe307E17c6f442E601519a1E': {
      name: `EthCC 4 Early Birds`,
    },
  },
  icon: `https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg`,
  callToAction: {
    default: `Purchase your ticket by clicking on 'Purchase' below. Your web3 wallet will ask you to confirm 2 transactions: one for the DAI transfer, and one for the ticket purchase.`,
  },
};

export const UNLOCK_MODULE_CONFIG = {
  unlockAppUrl: `https://app.unlock-protocol.com`,
  locksmithUri: `https://locksmith.unlock-protocol.com`,
  readOnlyProvider: ``,
};

export const UNLOCK_MODULE_CONFIG_TESTNET = {
  unlockAppUrl: `https://staging-app.unlock-protocol.com`,
  locksmithUri: `https://locksmith.unlock-protocol.com`,
  readOnlyProvider: ``,
};

export const UNLOCK_MAINNET = {
  config: UNLOCK_PAYWALL_CONFIG,
  module: UNLOCK_MODULE_CONFIG,
};

export const UNLOCK_TESTNET = {
  config: UNLOCK_PAYWALL_CONFIG_TESTNET,
  module: UNLOCK_MODULE_CONFIG_TESTNET,
};
