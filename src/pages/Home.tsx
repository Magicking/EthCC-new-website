import React, { useState } from 'react';

import { Flex, Heading, Text, UnlockModal } from '@components';
import { useTimeLeft } from '@hooks';
import { TICKET_FIAT_PAYWALL } from '@config';

const Home = () => {
  const { timeLeft } = useTimeLeft(new Date(`2021-07-20T09:30:00`));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main style={{ width: `100%` }}>
      {isOpen && <UnlockModal closeModal={() => setIsOpen(false)} />}
      <Flex sx={{ flexDirection: `column`, maxWidth: `1140px`, mx: `auto` }}>
        <Flex sx={{ width: `70%`, flexDirection: `column`, my: `50px` }}>
          <Heading as="h1" variant="bigHeading" sx={{ mb: `1.5rem` }}>
            Ethereum Community Conference 4
          </Heading>
          <Text sx={{ fontSize: `1.7rem`, mb: `1rem` }}>July 20-22, 2021</Text>
          <Text sx={{ fontSize: `1.7rem`, mb: `3rem` }}>
            Maison de la Mutualité, Paris, France 🇫🇷
          </Text>
          <Text
            sx={{ fontSize: `1.7rem`, color: `primary` }}
          >{`${timeLeft.weeks} weeks ${timeLeft.days} days ${timeLeft.hours} hr ${timeLeft.minutes} min ${timeLeft.seconds} sec`}</Text>
        </Flex>
        <Flex>
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
            Buy Ticket in €
          </Text>
          <Text variant="links.primary" onClick={() => setIsOpen(true)}>
            Buy Ticket in Crypto 🚀
          </Text>
        </Flex>
      </Flex>
    </main>
  );
};

export default Home;
