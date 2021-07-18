import React, { useState } from 'react';

import { format, isValid, addMinutes } from 'date-fns';
import makeUrl, { TCalendarEvent } from 'add-event-to-calendar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarPlus,
  faChevronDown,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import { Flex, Heading, Text, Close, Link } from '@components';
import { getTrackColor } from '@utils';
import { Track as ITrack } from '@types';

export const Item = ({ item }: { item: ITrack }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getCalendarEvent = (track: ITrack): TCalendarEvent => ({
    name: `${track.Speakers} - ${track.Title} @EthCC[4]`,
    location: `24 Rue Saint-Victor, 75005 Paris`,
    details: track.Abstract,
    startsAt: new Date(`${item.Date}T${item.Hour}:00`).toString(),
    endsAt: addMinutes(
      new Date(`${item.Date}T${item.Hour}:00`),
      Number(track.Time),
    ).toString(),
  });

  return (
    <Flex
      sx={{
        background: `#fff`,
        border: `2px solid`,
        borderColor: `text`,
        width: `100%`,
        my: `12px`,
        p: `25px`,
        pb: `0`,
        borderRadius: `3px`,
        flexDirection: `column`,
        cursor: `pointer`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
    >
      <Flex
        sx={{
          flexDirection: `row`,
          justifyContent: `space-between`,
          width: `100%`,
        }}
      >
        <Flex sx={{ flexDirection: `column`, width: `75%` }}>
          <Heading
            as="h3"
            sx={{
              textTransform: `uppercase`,
              fontWeight: `bold`,
              fontSize: `1rem`,
            }}
          >
            {item.Title}
            <Text
              sx={{
                fontWeight: `normal`,
                color: `primary`,
                fontStyle: `italic`,
              }}
            >
              {` `}- {item.Category}
            </Text>
          </Heading>
          <Flex
            sx={{
              flexDirection: [`column`, null, `row`],
              alignItems: [null, null, `center`],
              mt: `5px`,
            }}
          >
            <Text sx={{ color: `primary`, textTransform: `capitalize` }}>
              {item.Speakers.toLowerCase()}
            </Text>
            <Text sx={{ mt: [`10px`, null, 0], ml: [null, null, `20px`] }}>
              {isValid(new Date(`${item.Date}T${item.Hour}:00`)) &&
                format(
                  new Date(`${item.Date}T${item.Hour}:00`),
                  `MMMM do h:mm aaa`,
                )}
            </Text>
            <Text sx={{ mt: [`10px`, null, 0], ml: [null, null, `20px`] }}>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: `5px` }} />
              {item.Time} min
            </Text>
            <Text sx={{ mt: [`10px`, null, 0], ml: [null, null, `20px`] }}>
              {item.Room}
            </Text>
          </Flex>
        </Flex>
        <Flex sx={{ flexDirection: `column`, alignItems: `center` }}>
          <Close
            sx={{
              color: `primary`,
              transform: isOpen ? `rotate(0deg)` : `rotate(45deg)`,
              transition: `all .3s ease`,
              mb: `25px`,
            }}
          />
          <Link
            href={makeUrl(getCalendarEvent(item)).google}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faCalendarPlus} size="lg" />
          </Link>
        </Flex>
      </Flex>
      <Flex sx={{ flexDirection: `row`, mt: `15px`, mb: `20px` }}>
        <Text
          sx={{
            backgroundColor:
              item[`In Person / Virtual`] === `virtual` ? `primary` : `text`,
            color: `#fff`,
            px: `5px`,
            borderRadius: `.8rem`,
            fontSize: `.8rem`,
            width: `fit-content`,
          }}
        >
          {item[`In Person / Virtual`]}
        </Text>
        <Text
          sx={{
            backgroundColor: `tracks.${getTrackColor(item.Track)}`,
            color: `#fff`,
            px: `5px`,
            borderRadius: `.8rem`,
            fontSize: `.8rem`,
            ml: `20px`,
            width: `fit-content`,
          }}
        >
          {item.Track}
        </Text>
      </Flex>
      <Flex>
        <Text
          sx={{
            mr: `50px`,
            maxHeight: isOpen ? `1800px` : `0`,
            opacity: isOpen ? `1` : `0`,
            overflow: `hidden`,
            transition: `all .5s ease`,
            pb: isOpen ? `25px` : `0`,
          }}
        >
          {item.Abstract}
        </Text>
      </Flex>
    </Flex>
  );
};

export const Track = ({
  name,
  items,
  shouldOpen,
}: {
  name: string;
  items: ITrack[];
  shouldOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(!!shouldOpen);

  return (
    <Flex
      sx={{
        width: `100%`,
        flexDirection: `column`,
        border: `2px solid`,
        borderColor: `text`,
        borderRadius: `3px`,
        py: `10px`,
        my: `.7rem`,
        cursor: `pointer`,
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex
        sx={{
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          px: `20px`,
          pb: `20px`,
          svg: {
            transform: `rotate(${isOpen ? `180deg` : `0deg`})`,
            transition: `all .3s ease`,
          },
        }}
      >
        <Heading
          as="h2"
          sx={{
            fontSize: `1.2rem`,
            color: `primary`,
          }}
        >
          {name}
        </Heading>
        <FontAwesomeIcon icon={faChevronDown} />
      </Flex>
      <Flex
        sx={{
          flexDirection: `column`,
          alignItems: `center`,
          mx: `25px`,
          overflow: `hidden`,
          maxHeight: isOpen ? `1000000px` : `0`,
          opacity: isOpen ? `1` : `0`,
          transition: `all .5s ease`,
        }}
      >
        {items.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </Flex>
    </Flex>
  );
};
