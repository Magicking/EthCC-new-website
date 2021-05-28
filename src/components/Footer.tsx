import React from 'react';

import { Flex, Heading, Link, Text } from '@components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
  <Flex
    as="footer"
    sx={{
      background: `#fff`,
      py: [`4em`, `8em`],
      width: `100%`,
      flexDirection: `column`,
    }}
  >
    <Flex
      sx={{
        maxWidth: [null, `540px`, `960px`, `1140px`],
        mx: `auto`,
        flexDirection: `column`,
      }}
    >
      <Flex
        sx={{
          flexDirection: [`column`, null, `row`],
          mb: `3rem`,
          flexGrow: 1,
          justifyContent: `space-between`,
        }}
      >
        <Flex
          sx={{
            flexDirection: `column`,
            flex: [1, null, `0 0 33%`],
            px: `15px`,
            py: [`20px`, null, 0],
          }}
        >
          <Heading as="h2" variant="subHeading">
            About us
          </Heading>
          <Text>
            Ethereum France (formerly ASSETH), is a French non-profit
            organization mainstreaming blockchain and Ethereum in all
            French-speaking countries so that everyone can assume ownership of
            this technology.
          </Text>
        </Flex>
        <Flex
          sx={{
            flexDirection: `column`,
            flex: [1, null, `0 0 25%`],
            px: `15px`,
            py: [`20px`, null, 0],
            ml: [0, null, `auto`],
          }}
        >
          <Heading as="h2" variant="subHeading">
            Links
          </Heading>
          <Link
            href="https://www.ethereum-france.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ethereum France
          </Link>
        </Flex>
        <Flex
          sx={{
            flexDirection: `column`,
            flex: [1, null, `0 0 33%`],
            px: `15px`,
            py: [`20px`, null, 0],
          }}
        >
          <Heading as="h2" variant="subHeading">
            Connect with us
          </Heading>
          <Flex sx={{ flexDirection: `row` }}>
            <Link
              href="https://twitter.com/ethcc"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 2 }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCf7zF8tFOb9T58nBo09BhAw"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 2 }}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              href="https://www.facebook.com/ethereumfrance/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 2 }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        sx={{
          flex: 1,
          mx: `15px`,
          justifyContent: `center`,
          pt: `3rem`,
          borderTop: `1px solid #b30602`,
        }}
      >
        <Text sx={{ textAlign: `center` }}>
          Copyright © {new Date().getFullYear()} EthCC | template by&nbsp;
          <Link
            href="https://colorlib.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colorlib
          </Link>
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
