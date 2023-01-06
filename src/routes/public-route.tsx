import { Navigate } from 'react-router-dom';

import LocalStorageService from '../services/LocalStorageService';

type Props = {
  children: JSX.Element;
};

function PublicRoute({ children }: Props) {
  const token = LocalStorageService.getValue('token');
  if (token) {
    return <Navigate to="/home" />;
  }

  return children;
}

export default PublicRoute;
