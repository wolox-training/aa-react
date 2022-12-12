import { SubmitHandler, useForm } from 'react-hook-form';

import { IFormValues } from '../../../interfaces/form';
import { signUpFormStructure } from '../../../constants/form';

import FormWrapper from './FormWrapper';
import styles from './Form.module.scss';
import Input from './Input';

function Form() {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  const formInputs = signUpFormStructure.map(({ label, name, type }) => (
    <Input key={name} name={name} label={label} type={type} register={register} />
  ));

  return (
    <FormWrapper>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {formInputs}
        <div className={styles.actions}>
          <button className={styles.signUp} type="submit">
            Sign Up
          </button>
          <button className={styles.login} type="button">
            Login
          </button>
        </div>
      </form>
    </FormWrapper>
  );
}

export default Form;
