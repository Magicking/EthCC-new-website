import React from 'react';

import { Link } from 'react-router-dom';

import { Text } from '@components';

export const HeaderLink = ({
  name,
  path,
  active,
}: {
  name: string;
  path: string;
  active: boolean;
}) => (
  <Link to={path} style={{ textDecoration: `none`, padding: `0 20px` }}>
    <Text
      variant="headerLink"
      sx={{ color: active && `primary`, ':after': { width: active && `100%` } }}
    >
      {name}
    </Text>
  </Link>
);

export const MobileHeaderLink = ({
  name,
  path,
  active,
  handleClick,
}: {
  name: string;
  path: string;
  active: boolean;
  handleClick(): void;
}) => (
  <Link
    to={path}
    style={{ textDecoration: `none`, padding: `10px 0` }}
    onClick={handleClick}
  >
    <Text
      sx={{
        color: active ? `primary` : `text`,
        fontSize: `20px`,
        ':hover': { color: `primary` },
      }}
    >
      {name}
    </Text>
  </Link>
);
