/* eslint-disable @typescript-eslint/naming-convention */
import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { IBaseForm, IFormValues, IFormMetadata } from '../../../interfaces/form';

import styles from './Form.module.scss';
import Input from './Input';

type Props = {
  formData: IFormMetadata[];
  screenKey: 'Login' | 'SignUp';
  register: UseFormRegister<any>;
  isLoading: boolean;
  errors: Partial<FieldErrorsImpl<IBaseForm | IFormValues>>;
  redirectParam: string;
};

function Form({ formData, screenKey, register, isLoading, errors, redirectParam }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const redirectHandler = () => {
    navigate(redirectParam);
  };

  return (
    <div className={styles.form}>
      {formInputs}
      <div className={styles.actions}>
        <button className={styles.signUp} type="submit">
          {isLoading ? 'Loading...' : t(`${screenKey}:optionOne`)}
        </button>
        <button onClick={redirectHandler} className={styles.login} type="button" disabled={isLoading}>
          {t(`${screenKey}:optionTwo`)}
        </button>
      </div>
    </div>
  );
}

export default Form;
