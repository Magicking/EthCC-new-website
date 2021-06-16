import React, { useState } from 'react';

import { Container, Flex, Text, Heading, UnlockModal, Link } from '@components';
import {
  KYBER_PAYWALL,
  STUDENT_APPLICATION,
  TICKET_FIAT_PAYWALL,
  VOLONTEER_APPLICATION,
} from '@config';

const Tickets = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main style={{ width: `100%` }}>
      {isOpen && <UnlockModal closeModal={() => setIsOpen(false)} />}
      <Container sx={{ mt: `5em` }}>
        <Flex sx={{ width: [`100%`, null, `70%`], flexDirection: `column` }}>
          <Heading as="h1" variant="bigHeading" sx={{ mb: `1.5rem` }}>
            EthCC[4] Tickets
          </Heading>
        </Flex>
      </Container>
      <Container>
        <Flex sx={{ flexDirection: [`column`, null, `row`], flexWrap: `wrap` }}>
          <Flex
            sx={{
              flexDirection: `column`,
              alignItems: `center`,
              border: `2px solid`,
              borderColor: `primary`,
              padding: `30px`,
              width: [`80%`, null, `40%`],
              mx: `auto`,
              mb: `5rem`,
              ':hover': {
                borderColor: `text`,
              },
            }}
          >
            <Text sx={{ fontSize: `2rem`, mb: `1.75rem` }}>Buy in Euro</Text>
            <Text sx={{ fontSize: `3rem`, color: `primary`, mb: `1.75rem` }}>
              <sup
                style={{
                  position: `relative`,
                  verticalAlign: `baseline`,
                  top: `-30px`,
                  fontSize: `18px`,
                }}
              >
                €
              </sup>
              300
            </Text>
            <Flex
              sx={{
                flexDirection: `column`,
                height: `8rem`,
                justifyContent: `space-between`,
                alignItems: `center`,
                mb: `1.75rem`,
              }}
            >
              <Text>3-Days Pass</Text>
              <Text>Free Catering</Text>
              <Text>EthCC Swag</Text>
            </Flex>
            <Text
              variant="links.primary"
              onClick={() =>
                window.open(
                  TICKET_FIAT_PAYWALL,
                  `_blank`,
                  `noopener, noreferrer , width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no`,
                )
              }
            >
              Buy Ticket
            </Text>
          </Flex>
          {/* <Flex
            sx={{
              flexDirection: `column`,
              alignItems: `center`,
              border: `2px solid`,
              borderColor: `text`,
              padding: `30px`,
              width: [`80%`, null, `40%`],
              mx: `auto`,
              mb: `5rem`,
              ':hover': {
                borderColor: `primary`,
              },
            }}
          >
            <Text sx={{ fontSize: `2rem`, mb: `1.75rem` }}>Buy in Crypto</Text>
            <Text sx={{ fontSize: `3rem`, color: `primary`, mb: `1.75rem` }}>
              <sup
                style={{
                  position: `relative`,
                  verticalAlign: `baseline`,
                  top: `-30px`,
                  fontSize: `18px`,
                }}
              >
                DAI
              </sup>
              350
            </Text>
            <Flex
              sx={{
                flexDirection: `column`,
                height: `8rem`,
                justifyContent: `space-between`,
                alignItems: `center`,
                mb: `1.75rem`,
              }}
            >
              <Text>3-Days Pass</Text>
              <Text>Free Catering</Text>
              <Text>EthCC Swag</Text>
            </Flex>
            <Text variant="links.primary" onClick={() => setIsOpen(true)}>
              Buy Ticket
            </Text>
            <Text
              sx={{
                mt: `20px`,
                fontWeight: `bold`,
                cursor: `pointer`,
                textTransform: `uppercase`,
              }}
              variant="links.inverted"
              onClick={() =>
                window.open(
                  KYBER_PAYWALL,
                  `_blank`,
                  `noopener, noreferrer , width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no`,
                )
              }
            >
              Need to buy DAI ?
            </Text>
          </Flex> */}
          <Flex
            sx={{
              flexDirection: `column`,
              alignItems: `center`,
              border: `2px solid`,
              borderColor: `text`,
              padding: `30px`,
              mb: [`5rem`, null, 0],
              width: [`80%`, null, `40%`],
              mx: `auto`,
              ':hover': {
                borderColor: `primary`,
              },
            }}
          >
            <Text
              sx={{
                fontSize: `2rem`,
                mb: `1.75rem`,
                height: `8rem`,
              }}
            >
              Volunteer
            </Text>
            <Text sx={{ height: `6rem`, textAlign: `center` }}>
              Help us out and get a free ticket to EthCC[4]
            </Text>
            <Link
              variant="primary"
              href={VOLONTEER_APPLICATION}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fill in the form
            </Link>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default Tickets;
