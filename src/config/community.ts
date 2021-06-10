import gitcoin from '@assets/community/gitcoin.png';
import panvala from '@assets/community/panvala.jpg';

interface Community {
  name: string;
  picture: string;
  link: string;
}

export const COMMUNITY: Community[] = [
  {
    name: `Gitcoin`,
    picture: gitcoin,
    link: `https://gitcoin.co/`,
  },
  {
    name: `Panvala`,
    picture: panvala,
    link: `https://panvala.com/`,
  },
];
