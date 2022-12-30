import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';

import { loginFormStructure } from '../../constants/form';
import Form from '../../components/App/Auth/Form';
import FormWrapper from '../../components/App/Auth/FormWrapper';
import { loginUser } from '../../services/ApiService';
import { IBaseForm } from '../../interfaces/form';

import styles from './styles.module.scss';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IBaseForm>();

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(loginUser, {
    onSuccess: (response) => console.log('good:', response),
    onError: (error) => console.log('bad: ', error)
  });

  const { t } = useTranslation();

  return (
    <section className={styles.login}>
      <FormWrapper>
        <form className={styles.form} onSubmit={handleSubmit((request) => mutate(request))}>
          <Form
            register={register}
            isLoading={isLoading}
            errors={errors}
            formData={loginFormStructure}
            screenKey="Login"
            redirectParam="/sign_up"
          />
        </form>
        {(isError || (isSuccess && !data.ok)) && <p className={styles.error}>{t('Login:isError')}</p>}
      </FormWrapper>
    </section>
  );
}

export default Login;
