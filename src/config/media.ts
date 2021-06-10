import beincrypto from '@assets/media/beincrypto.png';
import cryptoast from '@assets/media/cryptoast.png';
import defiprime from '@assets/media/defiprime.png';
import francecrypto from '@assets/media/francecrypto.png';

interface Media {
  name: string;
  picture: string;
  link: string;
}

export const MEDIA: Media[] = [
  {
    name: `Be in Crypto`,
    picture: beincrypto,
    link: `https://beincrypto.com/`,
  },
  {
    name: `Cryptoast`,
    picture: cryptoast,
    link: `https://cryptoast.fr/`,
  },
  {
    name: `Francec rypto`,
    picture: francecrypto,
    link: `https://francecrypto.fr/`,
  },
  {
    name: `Defi Prime`,
    picture: defiprime,
    link: `https://defiprime.com/`,
  },
];
