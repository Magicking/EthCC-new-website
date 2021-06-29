import React from 'react';

import { Container, Flex, Heading, Text, Link, CovidMap } from '@components';
import {
  ETHCC_WEEK,
  IN_PARIS_MEASURES,
  LEDGER_AFTER_PARTY,
  TRAVELING_TO_FRANCE,
} from '@config';

const Info = () => (
  <main style={{ width: `100%` }}>
    <Container sx={{ mt: `5em` }}>
      <Flex sx={{ width: `100%`, flexDirection: `column` }}>
        <Heading as="h1" variant="bigHeading" sx={{ mb: `1.5rem` }}>
          Info
        </Heading>
      </Flex>
    </Container>
    <Container>
      <Flex sx={{ mb: `3rem` }}>
        <Heading variant="title">The Venue</Heading>
      </Flex>
      <Flex sx={{ flexDirection: `column` }}>
        <Text sx={{ pb: `3rem` }}>
          The Maison de la Mutualité is located{` `}
          <Text sx={{ color: `primary` }}>
            22 Rue Saint Victor, 75005 Paris.
          </Text>
        </Text>
        <Text>
          The Venue will be accessible{` `}
          <Text sx={{ color: `primary` }}>from 09 AM to 07 PM</Text>
          {` `}
          all three days
        </Text>
      </Flex>
    </Container>
    <Container>
      <Flex sx={{ mb: `3rem` }}>
        <Heading variant="title">COVID Measures</Heading>
      </Flex>
      <Flex sx={{ flexDirection: `column` }}>
        <Text sx={{ pb: `1rem` }}>
          EthCC will follow the COVID regulations put in place by the French
          Government. These measures are updated and we monitor them. You can
          find more information for travels to Paris and for in Paris measures
          down below.
        </Text>
        <Text sx={{ pb: `3rem`, color: `primary` }}>
          EthCC organisers will ask any attendee disrespectful of sanitary
          measures to leave the premises
        </Text>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            justifyContent: [`center`, null, `space-around`],
          }}
        >
          <Link
            variant="primary"
            href={TRAVELING_TO_FRANCE}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: [`2rem`, null, 0] }}
          >
            Traveling to Paris
          </Link>
          <Link
            variant="primary"
            href={IN_PARIS_MEASURES}
            target="_blank"
            rel="noopener noreferrer"
          >
            In Paris measures
          </Link>
        </Flex>
      </Flex>
    </Container>
    <Container>
      <Flex sx={{ mb: `3rem` }}>
        <Heading variant="title">COVID Testing</Heading>
      </Flex>
      <Flex sx={{ flexDirection: `column` }}>
        <Text sx={{ mb: `3rem` }}>
          Several pharmacies close by the venue will provide{` `}
          <Text sx={{ color: `primary` }}>
            free COVID tests to EthCC attendees
          </Text>
          : you can find them on this map, here are their details. You will
          simply have to{` `}
          <Text sx={{ color: `primary` }}>
            show your attendee bracelet to receive a test.
          </Text>
        </Text>
      </Flex>
      <Flex
        sx={{
          border: `2px solid`,
          borderColor: `primary`,
          borderRadius: `5px`,
        }}
      >
        <CovidMap />
      </Flex>
    </Container>
    <Container>
      <Flex sx={{ mb: `3rem` }}>
        <Heading variant="title">EthCC is an entire week of fun !</Heading>
      </Flex>
      <Flex sx={{ flexDirection: `column` }}>
        <Text sx={{ mb: `2rem` }}>
          We support all side events organised during EthCC. They can be found
          on this website :{` `}
          <Link
            href={ETHCC_WEEK}
            sx={{ textDecoration: `underline` }}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ethccweek.fr
          </Link>
          {` `}
          and you can submit your event to be listed through a form available on
          it.
        </Text>
        <Text>
          <Text sx={{ color: `primary` }}>
            The Official After Party By Ledger
          </Text>
          {` `}
          will be accessible to all EthCC participants but{` `}
          <Link
            href={LEDGER_AFTER_PARTY}
            sx={{ textDecoration: `underline` }}
            target="_blank"
            rel="noopener noreferrer"
          >
            book your ticket
          </Link>
          {` `}!
        </Text>
      </Flex>
    </Container>
    <Container>
      <Flex sx={{ mb: `3rem` }}>
        <Heading variant="title">EthCC Code of Conduct</Heading>
      </Flex>
      <Flex sx={{ flexDirection: `column` }}>
        <Text>
          <Text sx={{ color: `primary` }}>Please read attentively</Text> our
          {` `}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="EthCC4_CoC.pdf"
            sx={{ textDecoration: `underline` }}
          >
            code of Conduct
          </Link>
          . We do not accept any behaviour that is less than benevolent.
        </Text>
      </Flex>
    </Container>
  </main>
);

export default Info;
