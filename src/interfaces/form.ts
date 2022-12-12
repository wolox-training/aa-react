import { InputNames, InputTypes } from '../types/form';

export interface IFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFormMetadata {
  name: InputNames;
  type: InputTypes;
  label: string;
  pattern?: RegExp;
}
