import { EthVC, Home, Speakers } from '@pages';

export const routes = {
  HOME: {
    path: `/`,
    name: `Home`,
    component: Home,
  },
  SPEAKERS: {
    path: `/speakers`,
    name: `Speakers`,
    component: Speakers,
  },
  ETHVC: {
    path: `/ethvc`,
    name: `EthVC`,
    component: EthVC,
  },
  BUY_TICKETS: {
    path: `/tickets`,
    name: `Buy Tickets`,
    button: true,
  },
};
