export interface IFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFormMetadata {
  name: 'name' | 'lastName' | 'email' | 'password' | 'confirmPassword';
  type: 'number' | 'text' | 'password' | 'email';
  label: string;
}
