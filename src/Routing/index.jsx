import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../views/Components/Main';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact component={NavBar}
    />
  </Switch>
);

export default Routes;
