import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const HomePage = lazy(() => import('./home'));
const FeaturesPage = lazy(() => import('./features'));

export const publicRoutes: Array<RouteProps> = [
    {
        path: '/features',
        component: FeaturesPage
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
];
