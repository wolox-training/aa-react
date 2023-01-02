import api from '../config/api.sauce';
import { ILoginResponse } from '../interfaces/api-auth';
import { IFormValues, IBaseForm } from '../interfaces/form';

export const registerUser = (body: IFormValues) => api.post('/users', body);
export const loginUser = (body: IBaseForm) => api.post<ILoginResponse>('/login', body);
