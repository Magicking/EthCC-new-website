import React, { useEffect, useState } from 'react';

import ReactSelect from 'react-select';

import { groupBy, map, uniq } from 'ramda';

import {
  Container,
  Flex,
  Heading,
  Text,
  Track,
  Spinner,
  Input,
  Select,
  Box,
  Link,
  Switch,
} from '@components';

import { isValid, format, getTime, isFuture } from 'date-fns';
import { SheetService } from '@services';

import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { Track as ITrack } from '@types';
import { routes } from '@config';

const Agenda = () => {
  const [talks, setTalks] = useState<GoogleSpreadsheetRow[] | undefined>();
  const [sorted, setSorted] = useState<
    Record<string, GoogleSpreadsheetRow[]> | undefined
  >();

  const [sortingKey, setSortingKey] = useState<string>(`Track`);
  const [order, setOrder] = useState<string>(`Time`);
  const [query, setQuery] = useState<string>(``);
  const [hidePast, setHidePast] = useState<boolean>(false);
  const [options, setOptions] = useState<
    { value: string; label: string }[] | undefined
  >();
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);

  useEffect(() => {
    const getTalks = async () => {
      const res: GoogleSpreadsheetRow[] = await SheetService.getTracks();
      setTalks(
        res
          .sort(
            (a, b) =>
              getTime(new Date(`${a.Date}T${a.Hour}:00`)) -
              getTime(new Date(`${b.Date}T${b.Hour}:00`)),
          )
          .filter((talk) =>
            hidePast
              ? isFuture(getTime(new Date(`${talk.Date}T${talk.Hour}:00`)))
              : true,
          )
          .filter((talk) =>
            selectedTracks.length ? selectedTracks.includes(talk.Track) : true,
          ),
      );

      setOptions(
        uniq(res.map((talk) => talk.Track)).reduce(
          (acc, track) => [
            ...acc,
            {
              value: track,
              label: track,
            },
          ],
          [],
        ),
      );
    };

    getTalks();
  }, [setTalks, hidePast, selectedTracks]);

  useEffect(() => {
    if (talks) {
      const grouped = groupBy((talk) => talk[sortingKey], talks);
      setSorted(
        // @ts-expect-error wrong type on ramda
        map(
          (group) =>
            group.sort((a, b) => {
              switch (order) {
                case `Time`:
                  return (
                    getTime(new Date(`${a.Date}T${a.Hour}:00`)) -
                    getTime(new Date(`${b.Date}T${b.Hour}:00`))
                  );
                case `Track`:
                  return (
                    a.Track.localeCompare(b.Track) ||
                    getTime(new Date(`${a.Date}T${a.Hour}:00`)) -
                      getTime(new Date(`${b.Date}T${b.Hour}:00`))
                  );
                default:
                  return 0;
              }
            }),
          grouped,
        ),
      );
    }
  }, [talks, sortingKey, order]);

  useEffect(() => {
    if (query.length > 1) {
      setSorted({
        Results: talks.filter(
          (talk) =>
            talk.Title.toLowerCase().includes(query.toLowerCase()) ||
            talk.Speakers.toLowerCase().includes(query.toLowerCase()),
        ),
      });
    } else if (query === ``) {
      if (talks) setSorted(groupBy((talk) => talk[sortingKey], talks));
    }
  }, [query]);

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
        <Text>
          EthCC live streams will be accessible on{` `}
          <Link
            sx={{ textDecoration: `underline` }}
            href={routes.INTERSPACE.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            Interspace
          </Link>
          {` `}as well as the POAP art canvas, Status EthCC chat, etc.
        </Text>
      </Container>
      <Container>
        <Flex
          sx={{
            justifyContent: `space-between`,
            flexDirection: [`column`, null, `row`],
            alignItems: `flex-end`,
            mb: `25px`,
          }}
        >
          <Flex
            sx={{
              flexDirection: `row`,
              width: [`100%`, null, `auto`],
              order: [2, null, 1],
            }}
          >
            <Flex
              sx={{
                flexDirection: `column`,
                mr: `40px`,
                width: `100%`,
              }}
            >
              <Text sx={{ mb: `10px` }}>Filter by:</Text>
              <Select
                onChange={(e) => setSortingKey(e.target.value)}
                sx={{ width: [`100%`, null, `200px`] }}
              >
                <option>Track</option>
                <option>Date</option>
                <option>Room</option>
              </Select>
            </Flex>
            <Flex
              sx={{
                flexDirection: `column`,
                width: `100%`,
              }}
            >
              <Text sx={{ mb: `10px` }}>Sort by:</Text>
              <Select
                onChange={(e) => setOrder(e.target.value)}
                sx={{ width: [`100%`, null, `200px`] }}
              >
                <option>Time</option>
                <option>Track</option>
              </Select>
            </Flex>
          </Flex>
          <Flex
            sx={{
              width: [`100%`, null, `auto`],
              order: [1, null, 2],
              mb: [`40px`, null, 0],
            }}
          >
            <Input
              sx={{ width: [`100%`, null, `350px`] }}
              type="text"
              placeholder="Search for a talk..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            mb: `50px`,
            justifyContent: `space-between`,
            alignItems: [null, null, `flex-end`],
            width: `100%`,
          }}
        >
          <Flex
            sx={{
              flexDirection: `column`,
              width: [`100%`, null, `450px`],
              mb: [`40px`, null, `0`],
            }}
          >
            <Text sx={{ mb: `10px` }}>Show only:</Text>
            <Box sx={{ width: [`100%`, null, `450px`] }}>
              <ReactSelect
                isMulti
                options={options}
                placeholder="Select tracks..."
                isLoading={!options}
                onChange={(selected) => {
                  setSelectedTracks(
                    selected.reduce((acc, opt) => [...acc, opt.value], []),
                  );
                }}
              />
            </Box>
          </Flex>
          <Flex>
            <Switch
              label="Hide past talks"
              onChange={(e) => setHidePast(e.target.checked)}
            />
          </Flex>
        </Flex>
        {sorted ? (
          Object.keys(sorted).map(
            (key) =>
              key !== `` && (
                <Track
                  name={
                    sortingKey === `Date`
                      ? isValid(new Date(key)) &&
                        format(new Date(key), `MMMM do`)
                      : key
                  }
                  items={(sorted[key] as unknown) as ITrack[]}
                  key={key}
                  shouldOpen={!!query}
                />
              ),
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
