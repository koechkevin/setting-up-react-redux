import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../views/Components/Main';
import Test from '../views/Components/Main/test';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact component={Main}
    />
    <Route
      path="/kkk/k" exact component={Test}
    />
  </Switch>
);

export default Routes;
