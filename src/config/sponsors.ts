import aave from '@assets/sponsors/aave.png';
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

interface Sponsor {
  name: string;
  picture: string;
  link: string;
}

export const GOLD: Sponsor[] = [
  {
    name: `Anoma`,
    picture: anoma,
    link: `https://anoma.network/`,
  },
];

export const SILVER: Sponsor[] = [
  {
    name: `Aave`,
    picture: aave,
    link: `https://aave.com/`,
  },
  {
    name: `Ledger`,
    picture: ledger,
    link: `https://www.ledger.com/`,
  },
  {
    name: `Status`,
    picture: status,
    link: `https://status.im/`,
  },
  {
    name: `John`,
    picture: john,
    link: `https://twitter.com/JohnLilic`,
  },
];

export const BRONZE: Sponsor[] = [
  {
    name: `Api3`,
    picture: api3,
    link: `https://api3.org/`,
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
  },
];

export const IRON: Sponsor[] = [
  {
    name: `Hopr`,
    picture: hopr,
    link: `https://hoprnet.org/`,
  },
  {
    name: `Arcadia`,
    picture: arcadia,
    link: `https://arcadiamgroup.com/`,
  },
];

export const COPPER: Sponsor[] = [
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
  },
  {
    name: `Cometh`,
    picture: cometh,
    link: `https://cometh.io/`,
  },
  {
    name: `kaiko`,
    picture: kaiko,
    link: `https://kaiko.com/`,
  },
];

export const SPONSORS = {
  GOLD,
  SILVER,
  BRONZE,
  IRON,
  COPPER,
};
