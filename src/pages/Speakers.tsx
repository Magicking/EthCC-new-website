import React from 'react';

import {
  Container,
  Flex,
  Heading,
  Text,
  Link,
  SpeakerCard,
  Box,
} from '@components';
import { SPEAKERS, SPEAKER_APPLICATION } from '@config';

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
          <Link
            variant="primary"
            href={SPEAKER_APPLICATION}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Here!
          </Link>
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
