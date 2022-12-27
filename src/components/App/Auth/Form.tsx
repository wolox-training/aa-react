/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import { IFormValues } from '../../../interfaces/form';
import { signUpFormStructure } from '../../../constants/form';
import { registerUser } from '../../../services/ApiService';

import FormWrapper from './FormWrapper';
import styles from './Form.module.scss';
import Input from './Input';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>();
  const { t } = useTranslation();

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(registerUser, {
    onSuccess: (response) => console.log('good:', response),
    onError: (error) => console.log('bad: ', error)
  });

  const formInputs = signUpFormStructure.map(({ label, name, type, pattern }) => (
    <Input
      key={name}
      name={name}
      label={label}
      type={type}
      register={register}
      errors={errors}
      pattern={pattern}
    />
  ));

  return (
    <FormWrapper>
      <form className={styles.form} onSubmit={handleSubmit((request) => mutate(request))}>
        {formInputs}
        <div className={styles.actions}>
          <button className={styles.signUp} type="submit">
            {isLoading ? 'Loading...' : t('SignUp:signUp')}
          </button>
          <button className={styles.login} type="button" disabled={isLoading}>
            {t('SignUp:login')}
          </button>
        </div>
      </form>
      {(isError || (isSuccess && !data.ok)) && <p className={styles.error}>{t('SignUp:isError')}</p>}
    </FormWrapper>
  );
}

export default Form;
