import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const Projects = lazy(() => import(/* webpackChunkName: "admin_Projects" */ './Projects'));

const CreateProject = lazy(() =>
    import(/* webpackChunkName: "admin_CreateProject" */ './Projects/CreateProject')
);

const EditProject = lazy(() =>
    import(/* webpackChunkName: "admin_EditProject" */ './Projects/EditProject')
);

const exact = true;

const buildRoutes = ({ path }) => {
    const routes = [
        {
            name: 'root',
            path: `${path}`,
            component: () => <Redirect to={`${path}/projects`} />,
            exact,
        },
        {
            name: 'projects',
            path: `${path}/projects`,
            component: Projects,
            exact,
        },
        {
            name: 'projects.create',
            path: `${path}/projects/create`,
            component: CreateProject,
            exact,
        },
        {
            name: 'projects.edit',
            path: `${path}/projects/edit/:uid`,
            component: EditProject,
            exact,
        },
    ];

    return routes;
};

export default buildRoutes;
