import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home_container';
import SearchConatiner from './containers/search_container';
import WishlistContainer from './containers/wishlist_container';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='search' component={SearchConatiner} />
    <Route path='wishlist' component={WishlistContainer} />
  </Route>
);