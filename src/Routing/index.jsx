import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/Components/Main';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact component={Main}
    />
  </Switch>
);

export default Routes;
