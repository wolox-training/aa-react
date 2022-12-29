import api from '../config/api.sauce';
import { IFormValues, IBaseForm } from '../interfaces/form';

export const registerUser = (body: IFormValues) => api.post('/users', body);
export const loginUser = (body: IBaseForm) => api.post('/login', body);
