import aave from '@assets/sponsors/aave.png';
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
      zoom: 1.2,
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
      name: `kaiko`,
      picture: kaiko,
      link: `https://kaiko.com/`,
      zoom: 1.5,
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
