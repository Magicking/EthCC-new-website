import { Flex, Image, Link } from '@theme-ui/components';
import React from 'react';

export const Maccaron = ({
  name,
  picture,
  link,
  zoom,
  size = 150,
}: {
  name: string;
  picture: string;
  link: string;
  size: number;
  zoom?: number;
}) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      backgroundColor: `#fff`,
      borderWidth: `3px`,
      borderColor: `primary`,
      borderStyle: `solid`,
      borderRadius: `50%`,
      width: `${size}px`,
      height: `${size}px`,
      m: `20px`,
      boxShadow: `0px 0px 13px -2px rgba(0,0,0,0.22)`,
      transition: `all .3s ease`,
      ':hover': {
        transform: `scale(1.05)`,
      },
    }}
  >
    <Flex
      sx={{
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        height: `100%`,
        width: `100%`,
      }}
    >
      <Image
        src={picture}
        alt={name}
        sx={{
          maxWidth: `${size * 0.58}px`,
          maxHeight: `${size * 0.58}px`,
          transform: `scale(${zoom || `1`})`,
        }}
      />
    </Flex>
  </Link>
);
