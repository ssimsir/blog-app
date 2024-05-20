import { Navigate, Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  const user  = true
  return user ? <Outlet /> : <Navigate to="/" />
};

export default MinimalLayout;
