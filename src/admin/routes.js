import { lazy } from 'react';

const Projects = lazy(() =>
  import(/* webpackChunkName: "admin_Projects" */ './Projects')
);

const CreateProject = lazy(() =>
  import(
    /* webpackChunkName: "admin_CreateProject" */ './Projects/CreateProject'
  )
);

const exact = true;

const buildRoutes = ({ path }) => {
  const routes = [
    {
      name: 'projects',
      path: `${path}`,
      component: CreateProject,
    },
    {
      name: 'projects.create',
      path: `${path}/projects/create`,
      component: CreateProject,
      exact,
    },
  ];

  return routes;
};

export default buildRoutes;
