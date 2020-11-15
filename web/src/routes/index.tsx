import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from '../pages/Home';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={Repository} path="/repository" />
    </BrowserRouter>
  );
};

export default Routes;
