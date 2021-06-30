import React from 'react';
import { Helmet } from 'react-helmet';

import cover from '@assets/cover.jpg';
import favicon from '@assets/favicon.png';

export const Seo = () => (
  <Helmet>
    <title>EthCC 4 &mdash; July 20-22, 2021</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Ethereum Community Conferences & Workshops: 20-21-22 July in Paris"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@EthCC" />
    <meta name="twitter:title" content="EthCC[4]" />
    <meta
      name="twitter:description"
      content="Ethereum Community Conferences & Workshops: 20-21-22 July in Paris"
    />
    <meta name="twitter:creator" content="@EthCC" />
    <meta name="twitter:image" content={cover} />
    <meta name="twitter:domain" content="ethcc.io" />
    <link rel="icon" type="image/png" href={favicon} />
  </Helmet>
);
