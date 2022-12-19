import { InputNames, InputTypes } from '../types/form';

export interface IFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export interface IFormMetadata {
  name: InputNames;
  type: InputTypes;
  label: string;
  pattern?: RegExp;
}
