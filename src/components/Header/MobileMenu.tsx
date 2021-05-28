import { Box, Flex, Link as ThemeLink } from '@components';
import { routes } from '@config';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router';
import { MobileHeaderLink } from './HeaderLink';

export const MobileMenu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu(): void;
}) => {
  const path = useLocation();
  return (
    <>
      <Box
        sx={{
          width: `100vw`,
          height: [isOpen ? `100vh` : `0`, null, 0],
          position: `absolute`,
          left: 0,
          right: 0,
          background: `rgba(0, 0, 0, 0.6)`,
          opacity: isOpen ? `1` : `0`,
          transition: `.3s opacity ease-in-out`,
        }}
      />
      <Box
        sx={{
          height: `100vh`,
          position: `fixed`,
          width: `300px`,
          top: 0,
          right: 0,
          background: `#fff`,
          transform: [
            `translateX(${isOpen ? `0%` : `100%`})`,
            null,
            `translateX(${`100%`})`,
          ],
          transition: `.3s all ease-in-out`,
          boxShadow: `-10px 0 20px -10px rgb(0 0 0 / 10%);`,
        }}
      >
        <Flex sx={{ flexDirection: `column`, width: `100%`, pt: `20px` }}>
          <Flex
            sx={{
              flexDirection: `row`,
              justifyContent: `flex-end`,
              px: `20px`,
              mt: `1rem`,
            }}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" onClick={closeMenu} />
          </Flex>
          <Flex sx={{ flexDirection: `column`, px: `40px` }}>
            {Object.keys(routes).map((idx) =>
              routes[idx].button ? (
                <Link
                  key={idx}
                  to={routes[idx].path}
                  onClick={closeMenu}
                  style={{ textDecoration: `none`, marginTop: `20px` }}
                >
                  <ThemeLink
                    as="p"
                    variant="primary"
                    sx={{ fontSize: `18px`, color: `primary` }}
                  >
                    {routes[idx].name}
                  </ThemeLink>
                </Link>
              ) : (
                <MobileHeaderLink
                  key={idx}
                  {...routes[idx]}
                  active={routes[idx].path === path}
                  handleClick={closeMenu}
                />
              ),
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
