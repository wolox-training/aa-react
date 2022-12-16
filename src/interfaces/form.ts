/* eslint-disable @typescript-eslint/naming-convention */
import { InputNames, InputTypes } from '../types/form';

interface BaseForm {
  email: string;
  password: string;
}

export interface IFormValues extends BaseForm {
  name: string;
  lastName: string;
  confirmPassword: string;
}

export interface IFormMetadata {
  name: InputNames;
  type: InputTypes;
  label: string;
  pattern?: RegExp;
}

export interface IRequestSignUp extends BaseForm {
  first_name: string;
  last_name: string;
  password_confirmation: string;
  locale: string;
}
