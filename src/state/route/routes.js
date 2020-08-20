import { lazy } from 'react';

const Home = lazy(() =>
  import(/* webpackChunkName: "page_Home" */ '@/pages/Home')
);
const Project = lazy(() =>
  import(/* webpackChunkName: "page_Project" */ '@/pages/Project')
);
const About = lazy(() =>
  import(/* webpackChunkName: "page_About" */ '@/pages/About')
);
const Admin = lazy(() =>
  import(/* webpackChunkName: "admin_Root" */ '@/admin/Admin')
);

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
