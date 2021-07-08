import React, { useState } from 'react';

import {
  Container,
  Flex,
  Heading,
  Text,
  UnlockModal,
  Image,
  Link,
  Maccaron,
  Box,
} from '@components';
import { useTimeLeft } from '@hooks';
import {
  BUDGET_TRANSPARENCY_ARTICLE,
  PARTNERS,
  SPONSORS,
  MEDIA,
  CONTACT_MAIL,
} from '@config';

import communityPic from '@assets/community_pic.png';

const Home = () => {
  const { timeLeft } = useTimeLeft(new Date(`2021-07-20T09:30:00`));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main style={{ width: `100%` }}>
      {isOpen && <UnlockModal closeModal={() => setIsOpen(false)} />}
      <Container sx={{ mt: `5em` }}>
        <Flex
          sx={{
            width: [`100%`, null, `70%`],
            flexDirection: `column`,
          }}
        >
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
        {/* <Flex sx={{ mt: `50px`, flexDirection: [`column`, `row`] }}>
          <Text
            variant="links.primary"
            sx={{
              opacity: `.5`,
              cursor: `not-allowed`,
              ':hover': {
                color: `text`,
              },
              ':hover:before': {
                width: `0`,
              },
            }}
          >
            Buy Ticket in €
          </Text>
          <Text
            variant="links.primary"
            sx={{
              ml: [0, `10px`],
              mt: [`1rem`, 0],
              opacity: `.5`,
              cursor: `not-allowed`,
              ':hover': {
                color: `text`,
              },
              ':hover:before': {
                width: `0`,
              },
            }}
          >
            Buy Ticket in Crypto 🚀
          </Text>
        </Flex> */}
      </Container>
      <Container>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            justifyContent: `space-between`,
            mb: `3rem`,
          }}
        >
          <Heading variant="title">About EthCC</Heading>
          <Text sx={{ width: [`100%`, null, `65%`], px: `15px`, pt: `15px` }}>
            The Ethereum Community Conference (EthCC) is the{` `}
            <Text sx={{ color: `primary` }}>
              largest annual European Ethereum event
            </Text>
            {` `}
            focused on technology and community. Three intense days of
            conferences, networking and learning.
          </Text>
        </Flex>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            alignItems: `center`,
            mb: [`3rem`, null, `50px`],
          }}
        >
          <Flex
            sx={{
              flex: [null, null, `0 0 50%`],
              px: `15px`,
              width: `100%`,
              mb: [`3rem`, null, `inherit`],
            }}
          >
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
          <Flex
            sx={{
              flexDirection: `column`,
              pl: [null, null, `3rem`],
              px: `15px`,
            }}
          >
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
        <Flex
          sx={{
            flexDirection: [`column-reverse`, null, `row`],
            alignItems: `center`,
          }}
        >
          <Flex
            sx={{
              pr: [`inherit`, null, `3rem`],
              pl: `15px`,
              flexDirection: `column`,
            }}
          >
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
            {/* <Heading variant="subHeading">Volunteering and students</Heading>
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
          </Text> */}
          </Flex>
          <Box
            sx={{ flex: `0 0 50%`, px: `15px`, mb: [`3rem`, null, `inherit`] }}
          >
            <Image
              src={communityPic}
              width="100%"
              height="auto"
              alt="community pic"
            />
          </Box>
        </Flex>
      </Container>
      <Container>
        <Flex sx={{ mb: `3rem` }}>
          <Heading variant="title">Sponsors</Heading>
        </Flex>

        {Object.keys(SPONSORS).map((level) => (
          <Flex sx={{ flexDirection: `column` }} key={level}>
            <Flex
              sx={{
                mb: `3rem`,
                mt: `1.75rem`,
                flexDirection: [`column`, null, `row`],
                alignItems: `center`,
                flexWrap: `wrap`,
                justifyContent: `center`,
              }}
            >
              {SPONSORS[level].content.map((sponsor) => (
                <Maccaron
                  {...sponsor}
                  key={sponsor.name}
                  size={SPONSORS[level].size}
                />
              ))}
            </Flex>
          </Flex>
        ))}
      </Container>
      <Container>
        <Flex sx={{ mb: `3rem` }}>
          <Heading variant="title">Partners</Heading>
        </Flex>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            alignItems: `center`,
            justifyContent: [`center`, null, `normal`],
            flexWrap: `wrap`,
          }}
        >
          {PARTNERS.map((partner, idx) => (
            <Maccaron {...partner} size={150} key={idx} />
          ))}
        </Flex>
      </Container>
      <Container>
        <Flex sx={{ mb: `3rem` }}>
          <Heading variant="title">Media</Heading>
        </Flex>
        <Flex
          sx={{
            flexDirection: [`column`, null, `row`],
            alignItems: `center`,
            flexWrap: `wrap`,
            pb: `2rem`,
          }}
        >
          {MEDIA.map((item) => (
            <Maccaron {...item} key={item.name} size={150} />
          ))}
        </Flex>
        <Flex sx={{ justifyContent: `center` }}>
          <Link variant="primary" href={CONTACT_MAIL}>
            Contact Us!
          </Link>
        </Flex>
      </Container>
    </main>
  );
};

export default Home;
