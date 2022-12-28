import SignUp from '../screens/SignUp/index';
import Login from '../screens/Login/index';
import App from '../components/App';

const routes = [
  {
    path: '/',
    element: (
      <App>
        <Login />
      </App>
    )
  },
  {
    path: '/sign_up',
    element: (
      <App>
        <SignUp />
      </App>
    )
  }
];

export default routes;
