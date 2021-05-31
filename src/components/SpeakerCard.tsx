import React from 'react';

import { Speaker } from '@types';
import { Flex, Image, Text, Link, Box } from '@components';

export const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <Flex
    sx={{
      flexDirection: `column`,
      mx: `auto`,
      mt: `3rem`,
      alignItems: `center`,
    }}
  >
    <Image
      sx={{
        width: `150px`,
        borderRadius: `40px`,
        border: `2px solid`,
        borderColor: `primary`,
      }}
      src={speaker.picture}
      alt={`${speaker.firstname} ${speaker.lastname}`}
    />
    <Text sx={{ fontSize: `1.25rem`, mt: `10px`, textAlign: `center` }}>
      <Link
        variant="inverted"
        href={speaker.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {speaker.firstname}
      </Link>
      {` `}
      <Text sx={{ textTransform: `uppercase` }}>{speaker.lastname}</Text>
    </Text>
    <Text sx={{ textAlign: `center` }}>{speaker.company}</Text>
  </Flex>
);
