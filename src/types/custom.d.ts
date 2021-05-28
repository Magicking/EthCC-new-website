/* eslint-disable @typescript-eslint/no-explicit-any */
// This file holds ambient type declarations.

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

interface CustomWindow extends Window {
  // Web3
  ethereum?: any;
  web3?: any;
  unlockProtocol?: any;
  unlockProtocolConfig?: any;
  Web3Provider?: ethers.providers.Web3Provider;
  Web3Signer?: Web3Provider;
}
