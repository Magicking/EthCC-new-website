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
      <Text sx={{ mb: `1.5rem` }}>
        On Wednesday 21st and Thursday 22nd, EthCC will be enforcing the
        sanitary pass, due to new French regulations announced on July 12th
        2021.
      </Text>
      <Flex sx={{ flexDirection: `column`, my: `1.7rem` }}>
        <Heading variant="subHeading">What does it mean ? </Heading>
        <Text sx={{ mb: `1.5rem` }}>
          <Text sx={{ color: `primary` }}>Don’t Panic</Text>, understanding the
          sanitary pass :
        </Text>
        <Text>
          these new rules mean we will have to check that you are Covid negative
          (which we expect you will all be, because you wouldn’t put people at
          risk)
        </Text>
      </Flex>
      <Flex sx={{ flexDirection: `column`, my: `1.5rem` }}>
        <Heading variant="subHeading">How do we check it ?</Heading>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            justifyContent: `space-between`,
            alignItems: `center`,
            mt: `1rem`,
          }}
        >
          <Flex
            sx={{
              width: [`100%`, null, `40%`],
              border: `2px solid`,
              borderColor: `text`,
              p: `10px`,
            }}
          >
            <Text sx={{ textAlign: `center` }}>
              if you have received your full vaccine doses, and waited for the
              sufficient amount of time (depends on each vaccine, DYOR) then
              you’re good to go
            </Text>
          </Flex>
          <Flex sx={{ my: [`1.5rem`, null, `0`] }}>
            <Text sx={{ color: `primary` }}>OR</Text>
          </Flex>
          <Flex
            sx={{
              width: [`100%`, null, `40%`],
              border: `2px solid`,
              borderColor: `text`,
              p: `10px`,
            }}
          >
            <Text sx={{ textAlign: `center` }}>
              A PCR or antigenic negative result from less than 48h. Rapid
              testing (+- 30 min) is available in nearly all pharmacies in
              Paris. They cost under 35€.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={{ flexDirection: `column`, mt: `1.5rem`, mb: `3rem` }}>
        <Text>
          Technically it means that, on Tuesday, you can go get a antigenic 15
          min test after the event and happily enjoy the event on day 2 and 3
          with a negative result.
        </Text>
      </Flex>
      <Flex sx={{ flexDirection: `column` }}>
        <Text sx={{ mb: `3rem` }}>
          Several pharmacies close by the venue will provide{` `}
          <Text sx={{ color: `primary` }}>COVID tests</Text>
          .The closest ones are visible on this map.
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
