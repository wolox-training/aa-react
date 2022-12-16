import { create } from 'apisauce';

import { IRequestSignUp } from '../interfaces/form';

const api = create({
  baseURL: 'https://books-training-rails.herokuapp.com/api/v1',
  headers: {
    contentType: 'application/json'
  }
});

export const registerUser = (body: IRequestSignUp) => api.post('/users', body);
