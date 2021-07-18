import React from 'react';

import { useHistory } from 'react-router-dom';

import { Flex, Text, Heading, Close } from '@components';
import { routes } from '@config';

export const CovidModal = ({ onCloseClick }: { onCloseClick(): void }) => {
  const history = useHistory();
  return (
    <Flex
      sx={{
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        position: `fixed`,
        left: 0,
        top: 0,
        width: `100vw`,
        height: `100vh`,
        background: `rgba(0, 0, 0, 0.6)`,
        zIndex: 999,
      }}
    >
      <Flex
        sx={{
          flexDirection: `column`,
          background: `#fff`,
          borderRadius: `3px`,
          p: `40px`,
          pt: `60px`,
          width: [`90%`, null, null, `800px`],
          boxShadow: `0px 0px 13px -2px rgba(0,0,0,0.22)`,
          position: `relative`,
          overflowY: [`scroll`, null, `auto`],
        }}
      >
        <Close
          onClick={onCloseClick}
          sx={{
            position: `absolute`,
            cursor: `pointer`,
            top: `10px`,
            right: `10px`,
            transition: `all .3s ease`,
            ':hover': {
              color: `primary`,
            },
          }}
        />
        <Text sx={{ mb: `1.5rem` }}>
          On Wednesday 21st and Thursday 22nd, EthCC will be enforcing the
          sanitary pass, due to new French regulations announced on July 12th
          2021.
        </Text>
        <Flex sx={{ flexDirection: `column`, my: `1.7rem` }}>
          <Heading variant="subHeading">What does it mean ? </Heading>
          <Text sx={{ mb: `.5rem` }}>
            <Text sx={{ color: `primary` }}>Don’t Panic</Text>, understanding
            the sanitary pass :
          </Text>
          <Text>
            these new rules mean we will have to check that you are Covid
            negative (which we expect you will all be, because you wouldn’t put
            people at risk)
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
        <Flex sx={{ flexDirection: `column`, mt: `1.5rem` }}>
          <Text>
            Technically it means that, on Tuesday, you can go get a antigenic 15
            min test after the event and happily enjoy the event on day 2 and 3
            with a negative result.
          </Text>
        </Flex>
        <Flex sx={{ justifyContent: `center`, mt: `1.5rem` }}>
          <Text
            sx={{
              textDecoration: `underline`,
              cursor: `pointer`,
              transition: `all .3s ease`,
              ':hover': { color: `primary` },
            }}
            onClick={() => {
              onCloseClick();
              history.push(routes.INFO.path);
            }}
          >
            See more infos
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
