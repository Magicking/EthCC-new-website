import React from 'react';

import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Accordion,
} from '@components';

import kaiko from '@assets/kaiko.png';
import { INVITES_MAIL, SPEAKER_APPLICATION, VC_TRACK_VIRTUAL } from '@config';

const EthVC = () => (
  <main style={{ width: `100%` }}>
    <Container sx={{ mt: `5em` }}>
      <Flex sx={{ width: `100%`, flexDirection: `column` }}>
        <Heading as="h1" variant="bigHeading" sx={{ mb: `1.5rem` }}>
          EthVC!
        </Heading>
        <Flex
          sx={{
            flexDirection: `row`,
            alignItems: `center`,

            mb: `20px`,
          }}
        >
          <Text
            sx={{
              color: `primary`,
              fontSize: `1.7rem`,
            }}
          >
            Powered by:
          </Text>
          <Image src={kaiko} alt="kaiko" sx={{ height: `30px`, ml: `20px` }} />
        </Flex>
      </Flex>
    </Container>
    <Container>
      <Accordion
        content={[
          {
            title: (
              <Heading sx={{ fontSize: [`1.1rem`, null, `1.5rem`] }}>
                <Text
                  sx={{
                    textTransform: `uppercase`,
                    color: `primary`,
                    fontWeight: `500`,
                  }}
                >
                  Why
                </Text>
                {` `}a VC track during EthCC ?
              </Heading>
            ),
            content: (
              <Text>
                We aim to bridge the gap between VCs wishing to better
                understand the technology and discover groundbreaking projects,
                and blockchain projects/companies searching for funding, but
                with little VC network and access. The “EthVC Track” is a unique
                opportunity for VCs and carefully selected blockchain-based
                projects to meet and exchange over an intense 3-day program.
              </Text>
            ),
          },
          {
            title: (
              <Heading sx={{ fontSize: [`1.1rem`, null, `1.5rem`] }}>
                <Text
                  sx={{
                    textTransform: `uppercase`,
                    color: `primary`,
                    fontWeight: `500`,
                  }}
                >
                  What
                </Text>
                {` `}is the VC track?
              </Heading>
            ),
            content: (
              <Text>
                On the 1st Day of the conference (July 20th), investors will
                have access to the numerous conferences, including workshops
                addressed to the neophytes wishing to learn fast about
                blockchain and Ethereum, as well as talks led by the start-ups
                that will be pitching on the VC stage. On Days 2 and 3 (July
                21st & 22nd): VCs have access to a dedicated Pitch Room where
                selected startups will pitch their project to our community of
                investors- for the sake of efficiency and confidentiality, the
                Pitch Room will only be available to registered members with a
                VC Track Pass. The Pitch Room schedule will be shared ahead of
                the event, along with company details, short abstract, CEO
                profile, and fundraising asks. There will be both equity based
                and token based projects
              </Text>
            ),
          },
          {
            title: (
              <Heading sx={{ fontSize: [`1.1rem`, null, `1.5rem`] }}>
                <Text
                  sx={{
                    textTransform: `uppercase`,
                    color: `primary`,
                    fontWeight: `500`,
                  }}
                >
                  Quality
                </Text>
                {` `} - Our core value
              </Heading>
            ),
            content: (
              <Flex sx={{ flexDirection: `column` }}>
                <Text>The VC Track Pass ensures investors:</Text>
                <ul>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Quality of the projects
                      </Text>
                      {` `}
                      (qualified deal flow): all presenting startups need to
                      have at least a separate talk or workshop accepted in the
                      EthCC[4] program as a prerequisite to pitch.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Pre-validation of technology
                      </Text>
                      {` `}
                      and founder’s expertise: all presenting startups have been
                      screened and selected by our technical team.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Deeper dive into companies:
                      </Text>
                      {` `}
                      opportunity to efficiently know the team and tech better
                      by attending technical workshops and meet the other team
                      members (i.e. CEO’s pitch & CTO’s workshop).
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Access to the community
                      </Text>
                      {` `}
                      (stay abreast of new trends and relevant events): you will
                      become part of the community and have access to all
                      related EthCC events and curated content.
                    </Text>
                  </li>
                </ul>
              </Flex>
            ),
          },
          {
            title: (
              <Heading sx={{ fontSize: [`1.1rem`, null, `1.5rem`] }}>
                <Text
                  sx={{
                    textTransform: `uppercase`,
                    color: `primary`,
                    fontWeight: `500`,
                  }}
                >
                  Benefits
                </Text>
                {` `} - What we will deliver
              </Heading>
            ),
            content: (
              <Flex sx={{ flexDirection: `column` }}>
                <Text>The VC Track Pass includes:</Text>
                <ul>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Full access to the three days of conferences
                      </Text>
                      {` `}
                      including all tracks (Scalability, Development tools,
                      Governance, Privacy, Crypto Economics, etc.).
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        A VC Track booklet
                      </Text>
                      {` `}
                      with clear schedule of all startup pitches, organised by
                      fundraising type (equity-based vs. token based).
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Exclusive access to the Pitch Room
                      </Text>
                      {` `}
                      where startups will pitch their project/company.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Access to all pitch decks
                      </Text>
                      {` `}
                      in electronic format
                    </Text>
                  </li>
                  <li>
                    <Text>
                      <Text sx={{ fontWeight: `bold` }}>
                        Access to the founders directory
                      </Text>
                      {` `}
                      and contact details.
                    </Text>
                  </li>
                </ul>
              </Flex>
            ),
          },
          {
            title: (
              <Heading sx={{ fontSize: [`1.1rem`, null, `1.5rem`] }}>
                I&apos;m a
                <Text
                  sx={{
                    textTransform: `uppercase`,
                    color: `primary`,
                    fontWeight: `500`,
                  }}
                >
                  {` `}
                  Startup
                </Text>
              </Heading>
            ),
            content: (
              <Flex sx={{ flexDirection: `column` }}>
                <Text sx={{ mb: `2rem` }}>
                  You are a{` `}
                  <Text sx={{ color: `primary`, fontWeight: `bold` }}>
                    Blockchain Startup
                  </Text>
                  ? You are fundraising and you want to get advice from experts
                  and pitch in front of awesome VCs?
                </Text>
                <Text>
                  It is{` `}
                  <Text
                    sx={{
                      color: `primary`,
                      fontWeight: `bold`,
                      textTransform: `uppercase`,
                    }}
                  >
                    Free
                  </Text>
                  {` `}
                  and you can apply by following the steps below:
                </Text>
                <ol>
                  <li>
                    <Text>
                      <Text sx={{ textDecoration: `line-through` }}>
                        Apply here
                      </Text>
                      {` `}
                      (applications are closed) to be a speaker during the event
                    </Text>
                  </li>
                  <li>
                    <Text>
                      If selected, we will send you a questionnaire to get to
                      know more about you
                    </Text>
                  </li>
                  <li>
                    <Text>
                      Get 1:1 workshop during EthCC conference with experts to
                      help you refine your deck and pitch
                    </Text>
                  </li>
                  <li>
                    <Text>
                      Pitch and connect with VCs =&gt; increased chance to
                      accelerate your success!
                    </Text>
                  </li>
                </ol>
              </Flex>
            ),
          },
          {
            title: (
              <Heading sx={{ fontSize: [`1.1rem`, null, `1.5rem`] }}>
                I&apos;m an
                <Text
                  sx={{
                    textTransform: `uppercase`,
                    color: `primary`,
                    fontWeight: `500`,
                  }}
                >
                  {` `}
                  Investor
                </Text>
              </Heading>
            ),
            content: (
              <Flex sx={{ flexDirection: `column` }}>
                <ul>
                  <li>
                    <Text sx={{ textDecoration: `line-through` }}>
                      Buy the “VC Track Virtual”
                    </Text>
                    {` `}
                    (sold out) (virtual passes for up to 4 attendees): €799
                    (+tax) Buy =&gt; here
                  </li>
                  <li>
                    <Text>
                      VC Track “In person” (2 in-person passes + 2 virtual
                      passes): €1,499 (+ tax),{` `}
                      <Link
                        href={INVITES_MAIL}
                        sx={{ textDecoration: `underline` }}
                      >
                        Invite Only
                      </Link>
                    </Text>
                  </li>
                </ul>
              </Flex>
            ),
          },
        ]}
      />
    </Container>
  </main>
);

export default EthVC;
