import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';

import BookDetail from 'components/App/Detail/book-detail';
import { bookDetail } from 'services/ApiService';

function Detail() {
  const { id } = useLoaderData() as { id: string };
  const { isLoading, isError, data } = useQuery(['book', id], () => bookDetail(Number(id)));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError || !data || !data.data) {
    return <span>Error getting the book data</span>;
  }

  return <BookDetail book={data.data} />;
}

export default Detail;
