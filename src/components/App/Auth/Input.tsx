import { UseFormRegister } from 'react-hook-form';

import { IFormValues } from '../../../interfaces/form';

import styles from './Input.module.scss';

interface Props {
  name: 'name' | 'lastName' | 'email' | 'password' | 'confirmPassword';
  label: string;
  register: UseFormRegister<IFormValues>;
  type?: 'text' | 'number' | 'password' | 'email';
}

function Input({ name, label, register, type = 'text' }: Props) {
  return (
    <div className={styles.group}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} id={name} defaultValue="" type={type} {...register(name)} />
    </div>
  );
}

export default Input;
