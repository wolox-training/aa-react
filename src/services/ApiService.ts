import api from '../config/api.sauce';
import { ILoginResponse } from '../interfaces/api-auth';
import { IFormValues, IBaseForm } from '../interfaces/form';
import { Book } from '../interfaces/books';

export const registerUser = (body: IFormValues) => api.post('/users', body);
export const loginUser = (body: IBaseForm) => api.post<ILoginResponse>('/login', body);
export const booksList = () => api.get<Book[]>('/books');
