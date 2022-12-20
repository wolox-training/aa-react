import api from '../config/api.sauce';
import { IFormValues } from '../interfaces/form';

export const registerUser = (body: IFormValues) => api.post('/users', body);
