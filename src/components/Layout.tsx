import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Flex, Header, Footer, Router } from '@components';

export const Layout = () => (
  <BrowserRouter>
    <Flex sx={{ flexDirection: `column`, minHeight: `100vh` }}>
      <Header />
      <Flex sx={{ pt: `100px`, flexGrow: 1 }}>
        <Router />
      </Flex>
      <Footer />
    </Flex>
  </BrowserRouter>
);
