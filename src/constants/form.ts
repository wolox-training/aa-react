import { IFormMetadata } from '../interfaces/form';

export const signUpFormStructure: IFormMetadata[] = [
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
