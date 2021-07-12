import React, { useState } from 'react';

import { format, isValid } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClock } from '@fortawesome/free-solid-svg-icons';

import { Flex, Heading, Text, Close } from '@components';
import { getTrackColor } from '@utils';

export const Item = ({ item }: { item: Record<string, string> }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          </Flex>
        </Flex>

        <Close
          sx={{
            color: `primary`,
            transform: isOpen ? `rotate(0deg)` : `rotate(45deg)`,
            transition: `all .3s ease`,
          }}
        />
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
}: {
  name: string;
  items: Record<string, string>[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          maxHeight: isOpen ? `10000px` : `0`,
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
