import { InjectedConnector } from '@web3-react/injected-connector';
import { Web3Provider } from '@ethersproject/providers';

const POLLING_INTERVAL = 12000;

export const injected = new InjectedConnector({ supportedChainIds: [1, 4] });

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}
