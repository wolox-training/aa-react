import { IFormMetadata } from '../interfaces/form';

export const loginFormStructure: IFormMetadata[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    pattern: /^\S+@\S+\.\S+$/
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password'
  }
];

export const signUpFormStructure: IFormMetadata[] = [
  {
    name: 'firstName',
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
    type: 'email',
    pattern: /^\S+@\S+\.\S+$/
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
