import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import routes from './routes';
import useAuth from '@/state/hooks/useAuth';

import Login from './Login';
import Shell from './components/Shell';

const Admin = () => {
  let { path } = useRouteMatch();
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    return <Login />;
  }

  return (
    <Shell>
      <Switch>
        {routes({ path }).map((route) => {
          return <Route key={`root.admin.${route.name}`} {...route} />;
        })}
      </Switch>
    </Shell>
  );
};
export default Admin;
