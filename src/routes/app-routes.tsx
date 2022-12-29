import SignUp from '../screens/SignUp/index';
import Login from '../screens/Login/index';

const routes = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/sign_up',
    element: <SignUp />
  }
];

export default routes;
