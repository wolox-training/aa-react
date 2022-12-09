import { UseFormRegister } from 'react-hook-form';

import { InputNames, InputTypes } from '../../../types/form';
import { IFormValues } from '../../../interfaces/form';

import styles from './Input.module.scss';

interface Props {
  name: InputNames;
  label: string;
  register: UseFormRegister<IFormValues>;
  type?: InputTypes;
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
