import { lazy } from 'react';

const Home  = lazy(() => import('../container/Home'));
const OverView = lazy(() => import('../container/OverView'));
const Dashboard = lazy(() => import('../container/Dashboard'));
const Analy = lazy(() => import('../container/Analy'));

/** import page here for  navigate component **/
const routes = [
    {
        path: '/',
        exact: true,
        name: 'home',
        component:Home,
        private: false,
    },
    {
        path: '/overview',
        exact: true,
        name: 'overView',
        component:OverView,
        private: false,
    },
    {
        path: '/dashboard',
        exact: true,
        name: 'dashboard',
        component:Dashboard,
        private: false,
    },
    {
        path: '/Analytices',
        exact: true,
        name: 'Analytices',
        component:Analy,
        private: false,
    },
]



export  default routes;