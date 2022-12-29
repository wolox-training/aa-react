import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';

import Form from '../../components/App/Auth/Form';
import { signUpFormStructure } from '../../constants/form';
import { IFormValues } from '../../interfaces/form';
import { registerUser } from '../../services/ApiService';
import FormWrapper from '../../components/App/Auth/FormWrapper';

import styles from './styles.module.scss';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>();

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(registerUser, {
    onSuccess: (response) => console.log('good:', response),
    onError: (error) => console.log('bad: ', error)
  });

  const { t } = useTranslation();

  return (
    <section className={styles.signUp}>
      <FormWrapper>
        <form className={styles.form} onSubmit={handleSubmit((request) => mutate(request))}>
          <Form
            register={register}
            isLoading={isLoading}
            errors={errors}
            formData={signUpFormStructure}
            screenKey="SignUp"
            redirectParam="/"
          />
        </form>
        {(isError || (isSuccess && !data.ok)) && <p className={styles.error}>{t('SignUp:isError')}</p>}
      </FormWrapper>
    </section>
  );
}

export default SignUp;
