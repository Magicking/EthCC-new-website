import { Agenda, EthVC, Home, Info, Speakers, Tickets } from '@pages';

export const routes = {
  HOME: {
    path: `/`,
    name: `Home`,
    component: Home,
  },
  ABOUT: {
    path: `/info`,
    name: `Info`,
    component: Info,
  },
  AGENDA: {
    path: `/agenda`,
    name: `Agenda`,
    component: Agenda,
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
