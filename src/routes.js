import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import Users from './pages/users';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Users} path="/users" exact/>
    </BrowserRouter>
  )
}

export default Routes;