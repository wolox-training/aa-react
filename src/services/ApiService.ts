import { create } from 'apisauce';
import { SnakecaseSerializer } from 'cerealizr';

import { IFormValues } from '../interfaces/form';

const serializer = new SnakecaseSerializer();

const api = create({
  baseURL: 'https://books-training-rails.herokuapp.com/api/v1',
  headers: {
    contentType: 'application/json'
  }
});

api.addRequestTransform((request) => {
  if (request.data) {
    request.data = serializer.serialize(request.data);
  }
  if (request.headers) {
    request.headers = serializer.serialize(request.headers);
  }
});

export const registerUser = (body: IFormValues) => api.post('/users', body);