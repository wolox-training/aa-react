import { SubmitHandler, useForm } from 'react-hook-form';

import { IFormMetadata, IFormValues } from '../../../interfaces/form';

import FormWrapper from './FormWrapper';
import styles from './Form.module.scss';
import Input from './Input';

function Form() {
  const { register, handleSubmit } = useForm<IFormValues>();

  const formStructure: IFormMetadata[] = [
    {
      name: 'name',
      label: 'Nombre',
      type: 'text'
    },
    {
      name: 'lastName',
      label: 'Apellido',
      type: 'text'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    },
    {
      name: 'confirmPassword',
      label: 'Confirmación de Password',
      type: 'password'
    }
  ];

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  const formInputs = formStructure.map(({ label, name, type }) => (
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
