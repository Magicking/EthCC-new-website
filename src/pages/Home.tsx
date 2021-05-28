import React, { useState } from 'react';

import {
  Container,
  Flex,
  Heading,
  Text,
  UnlockModal,
  Image,
  Link,
} from '@components';
import { useTimeLeft } from '@hooks';
import {
  TICKET_FIAT_PAYWALL,
  BUDGET_TRANSPARENCY_ARTICLE,
  STUDENT_APPLICATION,
  speakers,
} from '@config';

import communityPic from '@assets/community_pic.png';

const Home = () => {
  const { timeLeft } = useTimeLeft(new Date(`2021-07-20T09:30:00`));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main style={{ width: `100%` }}>
      {isOpen && <UnlockModal closeModal={() => setIsOpen(false)} />}
      <Container sx={{ mt: `5em` }}>
        <Flex sx={{ width: `70%`, flexDirection: `column` }}>
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
        <Flex sx={{ mt: `50px` }}>
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
          <Text
            variant="links.primary"
            onClick={() => setIsOpen(true)}
            sx={{ ml: `10px` }}
          >
            Buy Ticket in Crypto 🚀
          </Text>
        </Flex>
      </Container>
      <Container>
        <Flex
          sx={{
            flexDirection: `row`,
            justifyContent: `space-between`,
            mb: `3rem`,
          }}
        >
          <Heading variant="title">About EthCC</Heading>
          <Text sx={{ width: `65%` }}>
            The Ethereum Community Conference (EthCC) is the{` `}
            <Text sx={{ color: `primary` }}>
              largest annual European Ethereum event
            </Text>
            {` `}
            focused on technology and community. Three intense days of
            conferences, networking and learning.
          </Text>
        </Flex>
        <Flex sx={{ flexDirection: `row`, alignItems: `center`, mb: `50px` }}>
          <Flex sx={{ flex: `0 0 50%`, px: `15px` }}>
            <iframe
              title="teaser"
              height="315"
              width="100%"
              src="https://www.youtube.com/embed/Vret5wmBG8M"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Flex>
          <Flex sx={{ flexDirection: `column`, pl: `3rem`, pr: `15px` }}>
            <Heading variant="subHeading">
              Sharing and transmitting knowledge
            </Heading>
            <Text>
              At Ethereum France, we believe that{` `}
              <Text sx={{ color: `primary` }}>
                sharing and transmitting knowledge is the most efficient way to
                develop a positive and fertile ecosystem.
              </Text>
              {` `}
              For this reason, EthCC covers many different subjects and
              addresses different levels of comprehension of the blockchain
              technology, through conferences and workshops.
            </Text>
          </Flex>
        </Flex>
        <Flex sx={{ flexDirection: `row`, alignItems: `center` }}>
          <Flex sx={{ pr: `3rem`, pl: `15px`, flexDirection: `column` }}>
            <Heading variant="subHeading">
              By the community, for the community
            </Heading>
            <Text sx={{ mb: `1.5rem` }}>
              EthCC is first and foremost an event by the community, for the
              community. Being non-profit, we keep the prices as low as
              possible.{` `}
              <Link
                sx={{ textDecoration: `underline` }}
                href={BUDGET_TRANSPARENCY_ARTICLE}
                target="_blank"
                rel="noopener noreferrer"
              >
                We are transparent on our budget
              </Link>
              {` `}
              and any extra profit will be redistributed in the ecosystem.
            </Text>
            <Heading variant="subHeading">Volunteering and students</Heading>
            <Text>
              We wish to welcome for free as many students as possible! If you
              are a student in France, you can have a free access to EthCC[4] by
              becoming a volunteer!{` `}
              <Link
                sx={{ textDecoration: `underline` }}
                href={STUDENT_APPLICATION}
                target="_blank"
                rel="noopener noreferrer"
              >
                If you are an international student, you can apply to get a free
                ticket.
              </Link>
            </Text>
          </Flex>
          <Flex sx={{ flex: `0 0 50%`, px: `15px` }}>
            <Image src={communityPic} width="100%" alt="community pic" />
          </Flex>
        </Flex>
      </Container>
      <Container>
        <Flex>
          <Heading variant="title">Speakers</Heading>
        </Flex>
      </Container>
    </main>
  );
};

export default Home;
