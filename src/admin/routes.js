import { lazy } from 'react';

const Projects = lazy(() =>
  import(/* webpackChunkName: "admin_Projects" */ './Projects')
);

const exact = true;

const buildRoutes = ({ path }) => {
  return [
    {
      name: 'projects',
      path: `${path}`,
      component: Projects,
      exact,
    },
  ];
};

export default buildRoutes;
