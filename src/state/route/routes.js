import { lazy } from 'react';

const Home = lazy(() =>
  import(/* webpackChunkName: "page_Home" */ '@/pages/Home')
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
    name: 'admin.root',
    path: '/secret',
    component: Admin,
    exact,
  },
];
