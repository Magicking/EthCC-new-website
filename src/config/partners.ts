import maisonmutualite from '@assets/partners/maisonmutualite.png';
import gitcoin from '@assets/partners/gitcoin.png';
import panvala from '@assets/partners/panvala.jpg';

interface Partner {
  name: string;
  picture: string;
  link: string;
  zoom?: number;
}

export const PARTNERS: Partner[] = [
  {
    name: `Maison de la Mutualité`,
    picture: maisonmutualite,
    link: `https://www.maisondelamutualite.com/`,
  },
  {
    name: `Gitcoin`,
    picture: gitcoin,
    link: `https://gitcoin.co/`,
    zoom: 1.5,
  },
  {
    name: `Panvala`,
    picture: panvala,
    link: `https://panvala.com/`,
    zoom: 1.5,
  },
];
