import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

import { InputNames, InputTypes } from '../../../types/form';
import { IFormValues } from '../../../interfaces/form';

import styles from './Input.module.scss';

interface Props {
  name: InputNames;
  label: string;
  register: UseFormRegister<IFormValues>;
  errors: Partial<FieldErrorsImpl<IFormValues>>;
  pattern?: RegExp;
  type?: InputTypes;
}

function Input({ name, label, register, errors, pattern, type = 'text' }: Props) {
  const validations: any = {
    required: { value: true, message: `${label} is required` }
  };

  if (pattern) {
    validations.pattern = { value: pattern, message: 'Invalid email' };
  }

  return (
    <div className={styles.group}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        defaultValue=""
        type={type}
        {...register(name, validations)}
      />
      {errors[name] && (
        <p className={styles.alert} role="alert">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}

export default Input;
