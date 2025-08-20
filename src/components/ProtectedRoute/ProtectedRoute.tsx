import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectIsAuthenticated } from '../../store/globalSlices/authSlice';

type IProps = {
  children?: ReactNode;
};

const ProtectedRoute: FC<IProps> = ({ children }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
