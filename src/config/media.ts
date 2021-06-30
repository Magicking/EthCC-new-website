import beincrypto from '@assets/media/beincrypto.png';
import cryptoast from '@assets/media/cryptoast.png';
import defiprime from '@assets/media/defiprime.png';
import francecrypto from '@assets/media/francecrypto.png';
import nftmorning from '@assets/media/nftmorning.png';
import cryptonewsz from '@assets/media/cryptonewsz.png';

interface Media {
  name: string;
  picture: string;
  link: string;
  zoom?: number;
}

export const MEDIA: Media[] = [
  {
    name: `Be in Crypto`,
    picture: beincrypto,
    link: `https://beincrypto.com/`,
    zoom: 1.3,
  },
  {
    name: `Cryptoast`,
    picture: cryptoast,
    link: `https://cryptoast.fr/`,
    zoom: 1.2,
  },
  {
    name: `Francec rypto`,
    picture: francecrypto,
    link: `https://francecrypto.fr/`,
    zoom: 1.4,
  },
  {
    name: `Defi Prime`,
    picture: defiprime,
    link: `https://defiprime.com/`,
    zoom: 1.4,
  },
  {
    name: `NFT Morning`,
    picture: nftmorning,
    link: `https://www.nftmorning.com/`,
  },
  {
    name: `CryptoNewsZ`,
    picture: cryptonewsz,
    link: `https://www.cryptonewsz.com/`,
    zoom: 1.4,
  },
];
