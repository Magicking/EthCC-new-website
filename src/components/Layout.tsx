import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Flex, Header, Footer, Router } from '@components';
import { CovidModal } from './CovidModal';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <Flex sx={{ flexDirection: `column`, minHeight: `100vh` }}>
        <Header />
        {isOpen && <CovidModal onCloseClick={() => setIsOpen(false)} />}
        <Flex sx={{ pt: `100px`, flexGrow: 1 }}>
          <Router />
        </Flex>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
};
