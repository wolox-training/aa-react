import { Navigate } from 'react-router-dom';

import LocalStorageService from '../services/LocalStorageService';

type Props = {
  children: JSX.Element;
};

function PrivateRoute({ children }: Props) {
  const token = LocalStorageService.getValue('token');
  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
