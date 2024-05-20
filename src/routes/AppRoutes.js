import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout';
import MainLayout from '../layout/MainLayout';
import MainRoutes from './MainRoutes';
// render - login
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('../pages/authentication/Register')));
const SamplePage = Loadable(lazy(() => import('../pages/extra-pages/SamplePage')));

// ==============================|| AUTH ROUTING ||============================== //

const AppRoutes = [
   {
      path: '/',
      element: <AuthLogin />
   },
   {
      path: 'register',
      element: <AuthRegister />
   },
   {
      path: 'blog',
      element: <MinimalLayout />,
      children: [
         {
            path: '',
            element: <MainLayout />,
            children: MainRoutes
         }
      ]
   }];

export default AppRoutes;
