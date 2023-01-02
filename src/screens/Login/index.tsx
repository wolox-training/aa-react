import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { loginFormStructure } from '../../constants/form';
import Form from '../../components/App/Auth/Form';
import FormWrapper from '../../components/App/Auth/FormWrapper';
import { loginUser } from '../../services/ApiService';
import { IBaseForm } from '../../interfaces/form';
import LocalStorage from '../../services/LocalStorageService';

import styles from './styles.module.scss';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IBaseForm>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(loginUser, {
    onSuccess: (response: any) => {
      LocalStorage.setValue('token', response?.data?.token);
      navigate('/home');
    },
    onError: (error) => console.log('bad: ', error)
  });

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
