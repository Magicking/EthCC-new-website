import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import logo from '@assets/logo.png';

import {
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Link as ThemeLink,
  MenuButton,
} from '@components';
import { routes } from '@config';
import { HeaderLink } from './HeaderLink';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const path = useLocation();

  return (
    <>
      <Flex
        sx={{
          position: `fixed`,
          width: `100%`,
          justifyContent: `center`,
          background: `#fff`,
          py: `1rem`,
          zIndex: 900,
        }}
      >
        <Flex
          sx={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1400px`,
            flexGrow: 1,
            px: `15px`,
            alignItems: `center`,
          }}
        >
          <Flex sx={{ alignItems: `center` }}>
            <Image src={logo} width="36px" alt="logo" />
            <Link
              to={routes.HOME.path}
              style={{
                textDecoration: `none`,
                marginBottom: 0,
                marginLeft: `15px`,
              }}
            >
              <Heading
                as="h1"
                sx={{
                  color: `text`,
                  fontWeight: `heading`,
                  transition: `.3s all ease`,
                  '&:hover': { color: `primary` },
                }}
              >
                EthCC<Text sx={{ color: `primary` }}>[4]</Text>
              </Heading>
            </Link>
          </Flex>
          {/* Desktop Menu */}
          <Box
            sx={{
              alignItems: `center`,
              justifyContent: `flex-end`,
              flexGrow: 1,
              display: [`none`, null, `flex`],
            }}
          >
            {Object.keys(routes).map((idx) =>
              routes[idx].button ? (
                <Link
                  key={idx}
                  to={routes[idx].path}
                  style={{ textDecoration: `none`, marginLeft: `20px` }}
                >
                  <ThemeLink
                    as="p"
                    variant="primary"
                    sx={{ fontSize: `14px`, color: `primary` }}
                  >
                    {routes[idx].name}
                  </ThemeLink>
                </Link>
              ) : (
                <HeaderLink
                  key={idx}
                  {...routes[idx]}
                  active={routes[idx].path === path}
                />
              ),
            )}
          </Box>
          {/* Mobile Menu */}
          <MenuButton
            sx={{
              ml: `auto`,
              display: [`block`, null, `none`],
              ':hover': { color: `primary` },
            }}
            onClick={() => setIsOpen(true)}
          />
        </Flex>
      </Flex>
      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
};
