import aave from '@assets/sponsors/aave.png';
import audius from '@assets/sponsors/audius.png';

interface Sponsor {
  name: string;
  picture: string;
  link: string;
}

export const SILVER: Sponsor[] = [
  {
    name: `Aave`,
    picture: aave,
    link: `https://aave.com/`,
  },
];

export const IRON: Sponsor[] = [
  {
    name: `Audius`,
    picture: audius,
    link: `https://audius.co/`,
  },
];

export const SPONSORS = {
  SILVER,
  IRON,
};
