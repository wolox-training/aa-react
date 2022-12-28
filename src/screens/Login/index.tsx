import { loginFormStructure } from '../../constants/form';
import Form from '../../components/App/Auth/Form';

import styles from './styles.module.scss';

function Login() {
  return (
    <section className={styles.login}>
      <Form formData={loginFormStructure} screenKey="Login" />
    </section>
  );
}

export default Login;
