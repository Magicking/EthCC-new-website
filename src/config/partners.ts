import maisonmutualite from '@assets/partners/maisonmutualite.png';
import yap from '@assets/partners/yap.png';

interface Partner {
  name: string;
  picture: string;
  link: string;
}

export const PARTNERS: Partner[] = [
  {
    name: `Maison de la Mutualité`,
    picture: maisonmutualite,
    link: `https://www.maisondelamutualite.com/`,
  },
  {
    name: `Yap`,
    picture: yap,
    link: `http://www.yapglobal.com/`,
  },
];
