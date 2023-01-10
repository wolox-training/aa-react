import { Book } from '../../../interfaces/books';
import fallback from '../../../assets/book-cover-fallback.png';

import styles from './books-list.module.scss';

type Props = {
  books: Book[];
};

function BooksList({ books }: Props) {
  const bookList = books.map(({ id, title, author }) => (
    <div className={styles.book} key={id}>
      <img className={styles.preview} src={fallback} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{author}</p>
    </div>
  ));

  return <section className={styles.container}>{bookList}</section>;
}

export default BooksList;
