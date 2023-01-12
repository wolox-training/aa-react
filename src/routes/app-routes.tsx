import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

import PrivateRoute from './private-route';
import PublicRoute from './public-route';
import { loader } from './book-loader';

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
  },
  {
    path: 'books/:id',
    element: (
      <PrivateRoute>
        <Detail />
      </PrivateRoute>
    ),
    loader
  }
];

export default routes;
