import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import PageLoader from '../PageLoader/PageLoader';

import routes from '../../routes/routes';

class App extends Component {
  func = () => {};

  render() {
    return (
      <div>
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route
              path={routes.HOME_PAGE.path}
              exact
              component={routes.HOME_PAGE.component}
            />
            <Route
              path={routes.MOVIE_DETAILS_PAGE.path}
              component={routes.MOVIE_DETAILS_PAGE.component}
            />
            <Route
              path={routes.MOVIES_PAGE.path}
              component={routes.MOVIES_PAGE.component}
            />
            <Redirect to={routes.HOME_PAGE.path} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
