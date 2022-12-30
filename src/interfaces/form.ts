import { InputNames, InputTypes } from '../types/form';

export interface IBaseForm {
  email: string;
  password: string;
}
export interface IFormValues extends IBaseForm {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface IFormMetadata {
  name: InputNames;
  type: InputTypes;
  label: string;
  pattern?: RegExp;
}
