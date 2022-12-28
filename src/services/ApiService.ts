import api from '../config/api.sauce';
import { IFormValues } from '../interfaces/form';

export const registerUser = (body: IFormValues) => api.post('/users', body);
export const loginUser = (body: IFormValues) => api.post('/login', body);
