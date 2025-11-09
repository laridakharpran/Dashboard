// import MainLayout from "layout/MainLayout";
import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';

import NetworkError from "views/Auth/NetworkError";
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
import MainLayout from 'layout/MainLayout';

// import Signin from "views/Auth/Signin"

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },







    ]
}
// const UserRoutes = {
//     path: '/',
//     element: <MainLayout />
// }

const NetworkRoutes = {
    path: '/networkerror',
    element: <NetworkError />
}
export { UserRoutes, NetworkRoutes };