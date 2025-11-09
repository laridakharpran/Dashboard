import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Historory from 'views/NewComponents/Historory';
import FeedbackForm from 'views/NewComponents/FeedBack';
import ProfilePage from 'views/NewComponents/Profile';
// import { element } from 'prop-types';
//import SalesPerson from 'views/utilities/Sales_Person/SalesPerson';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
//const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //


const MainRoutes = {
  path: '/main',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard/history',
      element: <Historory />
    },
    {
      path: 'dashboard/feedback',
      element: <FeedbackForm />
    },
    {
      path: 'dashboard/profile',
      element: <ProfilePage />
    },

    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        },
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
