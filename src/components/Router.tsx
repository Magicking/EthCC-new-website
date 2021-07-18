import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { routes } from '@config';
import { NotFound } from '@pages';

export const Router = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <Switch>
      {Object.keys(routes).map(
        (route) =>
          !routes[route].external && (
            <Route
              key={routes[route].name}
              exact
              path={routes[route].path}
              component={routes[route].component}
            />
          ),
      )}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
