import React, { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { ethers } from 'ethers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Label,
  Link,
  Text,
  Button,
} from '@components';
import { useEagerConnect, useInactiveListener, useUnlock } from '@hooks';
import { injected } from '@config';
import { getTokenMetadata } from '@utils';
import { UnlockFormValues } from '@types';

import metamask from '@assets/metamask.png';
import { UnlockService } from '@services';

export const UnlockModal = ({ closeModal }: { closeModal(): void }) => {
  const { active, activate, account, connector, library } = useWeb3React();
  const { state } = useUnlock();
  const triedEager = useEagerConnect();

  const [activatingConnector, setActivatingConnector] = useState<
    InjectedConnector | undefined
  >();

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const handleFormSumbit = async (values: UnlockFormValues) => {
    try {
      const metadata = getTokenMetadata({ address: account, ...values });
      const signature = await library.send(`personal_sign`, [
        ethers.utils.hexlify(ethers.utils.toUtf8Bytes(metadata)),
        account.toLowerCase(),
      ]);

      await UnlockService.sendMetadata(account, metadata, signature);
      closeModal();
      (window as CustomWindow).unlockProtocol.loadCheckoutModal();
    } catch (err) {
      console.error(`An error occured`, err);
    }
  };
  return (
    <Flex
      sx={{
        position: `fixed`,
        top: 0,
        left: 0,
        minWidth: `100%`,
        height: `100vh`,
        justifyContent: `center`,
        alignItems: `center`,
        background: `rgba(0, 0, 0, 0.6)`,
        zIndex: 999,
        overflowY: `auto`,
        pt: `150px`,
      }}
    >
      <Flex
        sx={{
          position: `relative`,
          maxWidth: `500px`,
          background: `#fff`,
          flexDirection: `column`,
          p: `20px`,
        }}
      >
        <Box
          sx={{
            position: `absolute`,
            right: 0,
            top: 0,
            pr: `20px`,
            pt: `20px`,
            zIndex: 999,
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeModal}
            size="1x"
            style={{ cursor: `pointer` }}
          />
        </Box>
        {active ? (
          state === `unlocked` ? (
            <Flex sx={{ flexDirection: `column`, justifyContent: `center` }}>
              <Text sx={{ mb: `20px` }}>
                You already have a ticket! Thanks for your trust and we&apos;re
                looking forward to seeing you!
              </Text>
              <Text>
                On the day of the event, we recommend that you bring your mobile
                web3 wallet to show your ticket. You can also receive the ticket
                as a QR code by email by{` `}
                <Link
                  sx={{ textDecoration: `underline` }}
                  target="_blank"
                  href="https://app.unlock-protocol.com/keychain/"
                >
                  going to your keychain
                </Link>
                {` `}
                and clicking on {` `}
                <Text sx={{ color: `primary` }}>Assert Ownership</Text>!
              </Text>
            </Flex>
          ) : (
            <>
              <Heading
                variant="title"
                sx={{ ':after': { left: 0 }, fontSize: `2.5rem`, mb: `20px` }}
              >
                Unlock Ticket
              </Heading>
              <Formik
                initialValues={{
                  email: ``,
                  fullName: ``,
                  phone: ``,
                  address1: ``,
                  address2: ``,
                  zipcode: ``,
                  city: ``,
                  country: ``,
                }}
                onSubmit={handleFormSumbit}
              >
                {({
                  values,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} style={{ width: `100%` }}>
                    <Text>
                      Please fill this form and submit to purchase a ticket with
                      crypto. Your wallet will prompt you to sign this
                      information and then ask you to confirm your purchase!
                    </Text>
                    <Box variant="inputWrapper">
                      <Label>Full Name</Label>
                      <Input
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                      />
                    </Box>
                    <Box variant="inputWrapper">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </Box>
                    <Box variant="inputWrapper">
                      <Label>Phone</Label>
                      <Input
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                    </Box>
                    <Heading>Billing info</Heading>
                    <Text>
                      If you want to receive an invoice (optional), please fill
                      in the following info.
                    </Text>
                    <Box variant="inputWrapper">
                      <Label>Address</Label>
                      <Input
                        type="text"
                        name="address1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address1}
                        sx={{ mb: `5px` }}
                      />
                      <Input
                        type="text"
                        name="address2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address2}
                      />
                    </Box>
                    <Box variant="inputWrapper">
                      <Label>Zip Code</Label>
                      <Input
                        type="text"
                        name="zipcode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zipcode}
                      />
                    </Box>
                    <Box variant="inputWrapper">
                      <Label>City</Label>
                      <Input
                        type="text"
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                      />
                    </Box>
                    <Box variant="inputWrapper">
                      <Label>Country</Label>
                      <Input
                        type="text"
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                      />
                    </Box>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      sx={{ width: `100%`, mt: `40px` }}
                    >
                      Save
                    </Button>
                  </form>
                )}
              </Formik>
            </>
          )
        ) : (
          <Flex
            sx={{
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Heading>Connect to Metamask</Heading>
            <Image src={metamask} width="150px" sx={{ my: `20px` }} />
            <Text sx={{ mb: `40px`, textAlign: `center` }}>
              In order to buy your ticket with DAI you need to connect to your
              Metamask account
            </Text>
            <Text
              variant="links.primary"
              onClick={() => {
                setActivatingConnector(connector as InjectedConnector);
                activate(injected);
              }}
            >
              Connect
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
