import aave from '@assets/sponsors/aave.png';
import apwine from '@assets/sponsors/apwine.png';
import yap from '@assets/partners/yap.png';
import audius from '@assets/sponsors/audius.png';
import ledger from '@assets/sponsors/ledger.png';
import status from '@assets/sponsors/status.png';
import john from '@assets/sponsors/john.png';
import witnet from '@assets/sponsors/witnet.png';
import hermez from '@assets/sponsors/hermez.png';
import raiden from '@assets/sponsors/raiden.png';
import api3 from '@assets/sponsors/api3.png';
import anoma from '@assets/sponsors/anoma.png';
import paraswap from '@assets/sponsors/paraswap.png';
import hopr from '@assets/sponsors/hopr.png';
import arcadia from '@assets/sponsors/arcadia.png';
import kleros from '@assets/sponsors/kleros.png';
import starkware from '@assets/sponsors/starkware.png';
import cometh from '@assets/sponsors/cometh.png';
import kaiko from '@assets/sponsors/kaiko.png';
import aurora from '@assets/sponsors/aurora.png';
import hoard from '@assets/sponsors/hoard.png';
import graph from '@assets/sponsors/graph.png';
import dyp from '@assets/sponsors/dyp.png';
import stakedao from '@assets/sponsors/stakedao.png';
import boson from '@assets/sponsors/boson.png';
import chainlink from '@assets/sponsors/chainlink.svg';
import oneinch from '@assets/sponsors/oneinch.png';
import cartoonbase from '@assets/sponsors/cartoonbase.png';
import near from '@assets/sponsors/near.svg';
import heightyheightmph from '@assets/sponsors/88mph.svg';
import aws from '@assets/sponsors/aws.jpg';
import celo from '@assets/sponsors/celo.jpg';
import iexec from '@assets/sponsors/iexec.jpg';
import quantstamp from '@assets/sponsors/quantstamp.png';
import polygon from '@assets/sponsors/polygon.svg';
import ethereum from '@assets/sponsors/ethereum.jpg';
import swarm from '@assets/sponsors/swarm.jpg';

interface SponsorGroup {
  size: number;
  content: Sponsor[];
}
interface Sponsor {
  name: string;
  picture: string;
  link: string;
  zoom?: number;
}

export const GOLD: SponsorGroup = {
  size: 300,
  content: [
    {
      name: `Anoma`,
      picture: anoma,
      link: `https://anoma.network/`,
      zoom: 1.25,
    },
  ],
};

export const SILVER: SponsorGroup = {
  size: 250,
  content: [
    {
      name: `Aave`,
      picture: aave,
      link: `https://aave.com/`,
      zoom: 1.2,
    },
    {
      name: `Ledger`,
      picture: ledger,
      link: `https://www.ledger.com/`,
      zoom: 1.4,
    },
    {
      name: `Status`,
      picture: status,
      link: `https://status.im/`,
      zoom: 1.4,
    },
    {
      name: `John`,
      picture: john,
      link: `https://twitter.com/JohnLilic`,
      zoom: 1.2,
    },
    {
      name: `Yap`,
      picture: yap,
      link: `http://www.yapglobal.com/`,
      zoom: 1.3,
    },
    {
      name: `Near`,
      picture: near,
      link: `https://near.org/`,
      zoom: 1.4,
    },
    {
      name: `Ethereum Fundation`,
      picture: ethereum,
      link: `https://ethereum.org/en/`,
    },
  ],
};

export const BRONZE: SponsorGroup = {
  size: 200,
  content: [
    {
      name: `Api3`,
      picture: api3,
      link: `https://api3.org/`,
      zoom: 1.5,
    },
    {
      name: `Paraswap`,
      picture: paraswap,
      link: `https://paraswap.io/`,
    },
    {
      name: `Hermez`,
      picture: hermez,
      link: `https://hermez.io/`,
    },
    {
      name: `Raiden`,
      picture: raiden,
      link: `https://raiden.network/`,
    },
    {
      name: `Witnet`,
      picture: witnet,
      link: `https://witnet.io/`,
      zoom: 1.4,
    },
    {
      name: `Stakedao`,
      picture: stakedao,
      link: `https://stakedao.org/`,
    },
    {
      name: `Boson`,
      picture: boson,
      link: `https://bosonprotocol.io/`,
      zoom: 1.4,
    },
    {
      name: `Chainlink`,
      picture: chainlink,
      link: `https://chain.link/`,
      zoom: 1.2,
    },
    {
      name: `1inch`,
      picture: oneinch,
      link: `https://1inch.io/`,
      zoom: 1.2,
    },
    {
      name: `Cartoonbase`,
      picture: cartoonbase,
      link: `https://cartoonbase.com/`,
      zoom: 1.5,
    },
    {
      name: `Celo`,
      picture: celo,
      link: `https://celo.org/`,
      zoom: 1.5,
    },
    {
      name: `IExec`,
      picture: iexec,
      link: `https://iex.ec/`,
    },
  ],
};

export const IRON: SponsorGroup = {
  size: 150,
  content: [
    {
      name: `Hopr`,
      picture: hopr,
      link: `https://hoprnet.org/`,
    },
    {
      name: `Arcadia`,
      picture: arcadia,
      link: `https://arcadiamgroup.com/`,
      zoom: 1.5,
    },
    {
      name: `The Graph`,
      picture: graph,
      link: `https://thegraph.com/`,
    },
    {
      name: `Dyp`,
      picture: dyp,
      link: `https://dyp.finance/`,
      zoom: 1.4,
    },
    {
      name: `88mph`,
      picture: heightyheightmph,
      link: `https://88mph.app/`,
    },
    {
      name: `AWS`,
      picture: aws,
      link: `https://aws.amazon.com/`,
    },
    {
      name: `Polygon`,
      picture: polygon,
      link: `https://polygon.technology/`,
      zoom: 1.1,
    },
    {
      name: `Swarm`,
      picture: swarm,
      link: `https://www.ethswarm.org/`,
      zoom: 1.4,
    },
  ],
};

export const COPPER: SponsorGroup = {
  size: 100,
  content: [
    {
      name: `Audius`,
      picture: audius,
      link: `https://audius.co/`,
    },
    {
      name: `Kleros`,
      picture: kleros,
      link: `https://kleros.io/`,
    },
    {
      name: `Starkware`,
      picture: starkware,
      link: `https://starkware.co/`,
      zoom: 1.3,
    },
    {
      name: `Cometh`,
      picture: cometh,
      link: `https://cometh.io/`,
      zoom: 1.2,
    },
    {
      name: `Kaiko`,
      picture: kaiko,
      link: `https://kaiko.com/`,
      zoom: 1.5,
    },
    {
      name: `Aurora`,
      picture: aurora,
      link: `https://aurora.dev/`,
      zoom: 1.5,
    },
    {
      name: `Hoard`,
      picture: hoard,
      link: `https://hoard.exchange/`,
    },
    {
      name: `Quantstamp`,
      picture: quantstamp,
      link: `https://quantstamp.com/`,
      zoom: 1.3,
    },
    {
      name: `APWine`,
      picture: apwine,
      link: `https://www.apwine.fi/`,
      zoom: 1.3,
    },
  ],
};

export const SPONSORS = {
  GOLD,
  SILVER,
  BRONZE,
  IRON,
  COPPER,
};
