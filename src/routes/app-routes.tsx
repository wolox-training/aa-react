import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';

import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const routes = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: '/sign_up',
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    )
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    )
  }
];

export default routes;
