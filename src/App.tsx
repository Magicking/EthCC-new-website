import React from 'react';

import { Web3ReactProvider } from '@web3-react/core';
import { Theme, ThemeProvider } from 'theme-ui';

import { UnlockProvider } from '@hooks';
import { getLibrary } from '@config';
import { Layout, Seo } from '@components';
import { theme } from '@theme';

import 'fontsource-roboto-mono/latin.css';

/**
 * Root component that we provide to Gatsby to wrap all our
 * components in.
 */
const App = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <UnlockProvider>
      <ThemeProvider theme={theme as Theme}>
        <Seo />
        <Layout />
      </ThemeProvider>
    </UnlockProvider>
  </Web3ReactProvider>
);

export default App;
