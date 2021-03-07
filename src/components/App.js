import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout/';
import routes from '../routes';

const App = () => (
  <Layout>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={routes.home} exact component={lazy(() => import('../views/Home' /* webpackChunkName: "home-view" */))} />
        <Route path={routes.movies} exact component={lazy(() => import('../views/Movies' /* webpackChunkName: "movies-view" */))} />
        <Route path={routes.movieDetails} component={lazy(() => import('../views/MovieDetails' /* webpackChunkName: "movie-details-view" */))} />
        <Route component={lazy(() => import('../views/NotFound' /* webpackChunkName: "not-found-view" */))} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;