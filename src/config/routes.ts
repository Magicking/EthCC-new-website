import { EthVC, Home, Speakers, Tickets } from '@pages';

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
    component: Tickets,
    button: true,
  },
};
