import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';

const routes = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/sign_up',
    element: <SignUp />
  },
  {
    path: 'home',
    element: <Home />
  }
];

export default routes;
