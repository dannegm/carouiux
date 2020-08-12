import { lazy } from 'react';

const Home = lazy(() =>
  import(/* webpackChunkName: "page_Home" */ '@/pages/Home')
);

const exact = true;

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    exact,
  },
];
