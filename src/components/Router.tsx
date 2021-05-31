import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '@config';
import { NotFound } from '@pages';

export const Router = () => (
  <Switch>
    {Object.keys(routes).map((route) => (
      <Route
        key={routes[route].name}
        exact
        path={routes[route].path}
        component={routes[route].component}
      />
    ))}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);
