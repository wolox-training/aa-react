import Form from '../../components/App/Auth/Form';
import { signUpFormStructure } from '../../constants/form';

import styles from './styles.module.scss';

function SignUp() {
  return (
    <section className={styles.signUp}>
      <Form formData={signUpFormStructure} screenKey="SignUp" />
    </section>
  );
}

export default SignUp;
