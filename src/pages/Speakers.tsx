import React from 'react';

import { Container, Flex, Heading, Text, SpeakerCard, Box } from '@components';
import { SPEAKERS } from '@config';

const Speakers = () => (
  <main style={{ width: `100%` }}>
    <Container sx={{ mt: `5em` }}>
      <Flex sx={{ width: [`100%`, null, `70%`], flexDirection: `column` }}>
        <Heading as="h1" variant="bigHeading" sx={{ mb: `1.5rem` }}>
          EthCC[4] Speakers
        </Heading>
        <Text sx={{ color: `primary`, fontSize: `1.7rem`, mb: `20px` }}>
          Become an EthCC speaker
        </Text>
        <Flex>
          <Text
            variant="links.primary"
            sx={{
              cursor: `not-allowed`,
              opacity: `.5`,
              ':hover': {
                color: `text`,
              },
              ':hover:before': {
                width: `0`,
              },
            }}
          >
            Applications are closed
          </Text>
        </Flex>
      </Flex>
    </Container>
    <Container>
      <Box
        sx={{
          display: `grid`,
          gridGap: `5px`,
          gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
        }}
      >
        {SPEAKERS.map((speaker) => (
          <SpeakerCard
            speaker={speaker}
            key={`${speaker.firstname}-${speaker.lastname}`}
          />
        ))}
      </Box>
    </Container>
  </main>
);

export default Speakers;
