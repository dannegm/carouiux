import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';

const E404 = lazy(() =>
  import(/* webpackChunkName: "page_E404" */ '@/pages/E404')
);

const Loader = () => <div>Cargando...</div>;

const RouteHandler = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route) => (
          <Route key={`root.${route.name}`} {...route} />
        ))}
        <Route component={E404} />
      </Switch>
    </Suspense>
  </Router>
);
export default RouteHandler;
