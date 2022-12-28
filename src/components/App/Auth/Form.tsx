/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import { IFormValues, IFormMetadata } from '../../../interfaces/form';
import { registerUser, loginUser } from '../../../services/ApiService';

import FormWrapper from './FormWrapper';
import styles from './Form.module.scss';
import Input from './Input';

type Props = {
  formData: IFormMetadata[];
  screenKey: 'Login' | 'SignUp';
};

function Form({ formData, screenKey }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>();
  const { t } = useTranslation();

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(
    screenKey === 'SignUp' ? registerUser : loginUser,
    {
      onSuccess: (response) => console.log('good:', response),
      onError: (error) => console.log('bad: ', error)
    }
  );

  const formInputs = formData.map(({ label, name, type, pattern }) => (
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
            {isLoading ? 'Loading...' : t(`${screenKey}:optionOne`)}
          </button>
          <button className={styles.login} type="button" disabled={isLoading}>
            {t(`${screenKey}:optionTwo`)}
          </button>
        </div>
      </form>
      {(isError || (isSuccess && !data.ok)) && <p className={styles.error}>{t(`${screenKey}:isError`)}</p>}
    </FormWrapper>
  );
}

export default Form;
