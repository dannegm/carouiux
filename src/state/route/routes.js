import { lazy } from 'react';

const Home = lazy(() => import('@pages/Home'));
const Project = lazy(() => import('@pages/Project'));
const About = lazy(() => import('@pages/About'));
const Admin = lazy(() => import('@admin/Admin'));

const exact = true;

export default [
    {
        name: 'home',
        path: '/',
        component: Home,
        exact,
    },
    {
        name: 'project',
        path: '/project/:slug',
        component: Project,
        exact,
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        exact,
    },
    {
        name: 'admin.root',
        path: '/secret',
        component: Admin,
    },
];
