import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import {
  selectIsAuthenticated,
  selectIsAuthLoading,
} from '../../store/globalSlices/authSlice';
import { Loader } from '../Loader';

type IProps = {
  children?: ReactNode;
};

const ProtectedRoute: FC<IProps> = ({ children }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const IsAuthLoading = useAppSelector(selectIsAuthLoading);
  const location = useLocation();
  const token = localStorage.getItem('authToken');

  if (IsAuthLoading) {
    return <Loader></Loader>;
  }

  if (!isAuthenticated && !token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
