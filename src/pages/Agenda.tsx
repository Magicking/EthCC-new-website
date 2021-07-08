import React, { useEffect, useState } from 'react';

import { Container, Flex, Heading, Text, Track, Spinner } from '@components';
import { SheetService } from '@services';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';

const Agenda = () => {
  const [tracks, setTracks] = useState<
    Record<string, GoogleSpreadsheetRow[]> | undefined
  >();

  useEffect(() => {
    const retriveTracks = async () => {
      const res = await SheetService.getTracks();
      setTracks(res);
    };

    retriveTracks();
  }, [setTracks]);

  return (
    <main style={{ width: `100%` }}>
      <Container sx={{ mt: `5em` }}>
        <Flex sx={{ width: [`100%`, null, `70%`], flexDirection: `column` }}>
          <Heading as="h1" variant="bigHeading" sx={{ mb: `1.5rem` }}>
            EthCC[4] Agenda
          </Heading>
          <Text sx={{ color: `primary`, fontSize: `1.7rem`, mb: `20px` }}>
            Talks and Workshops
          </Text>
        </Flex>
      </Container>
      <Container>
        {tracks ? (
          Object.keys(tracks).map(
            (key) =>
              key !== `` && <Track name={key} items={tracks[key]} key={key} />,
          )
        ) : (
          <Flex
            sx={{
              width: `100%`,
              flexDirection: `row`,
              justifyContent: `center`,
            }}
          >
            <Spinner sx={{ color: `primary` }} size={80} />
          </Flex>
        )}
      </Container>
    </main>
  );
};

export default Agenda;
