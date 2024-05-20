import { useRoutes } from 'react-router-dom';

// project import
import AppRoutes from './AppRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([/*MainRoutes,*/ ...AppRoutes]);
}
