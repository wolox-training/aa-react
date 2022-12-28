import { create } from 'apisauce';
import { SnakecaseSerializer } from 'cerealizr';

const serializer = new SnakecaseSerializer();

const api = create({
  baseURL: 'https://private-deb86-wbooksiostraining.apiary-mock.com',
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

export default api;
