import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import { UserRoutes } from './UserRoutes';
import { NetworkRoutes } from './UserRoutes';

//import AuthenticationRoutes from './AuthenticationRoutes';
//import {UserRoutes} from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, /* AuthenticationRoutes */UserRoutes, NetworkRoutes]);
}
