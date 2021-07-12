export const getTrackColor = (track: string) => {
  switch (track) {
    case `Ethereum 2.0`:
      return `eth2`;
    case `Developer Tools`:
      return `devtools`;
    case `dApps / UX /UI`:
      return `dapp`;
    case `Decentralised Finance`:
      return `defi`;
    case `Crypto Economics`:
      return `eco`;
    case `Blockchain For Good`:
      return `bfg`;
    case `Web3`:
      return `webt`;
    case `Governance / DAO`:
      return `dao`;
    default:
      return track;
  }
};
