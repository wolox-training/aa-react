import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Book } from 'interfaces/books';

import fallback from '../../../assets/book-cover-fallback.png';

import styles from './book-detail.module.scss';

type Props = {
  book: Book;
};

function BookDetail({ book }: Props) {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <Link to="/home" className={styles.back}>
        {t('Detail:back')}
      </Link>
      <div className={styles.card}>
        <img className={styles.image} src={fallback} alt={book.title} />
        <div className={styles.details}>
          <h1 className={styles.title}>
            {book.title} <strong className={styles.genre}> ({book.genre})</strong>
          </h1>
          <div className={styles.about}>
            <h3 className={styles.label}>{t('Detail:author')}: </h3>
            <p className={styles.value}> {book.author}</p>
          </div>
          <div className={styles.about}>
            <h3 className={styles.label}>{t('Detail:status')}: </h3>
            <p className={styles.value}> {book.status}</p>
          </div>
          <div className={styles.about}>
            <h3 className={styles.label}>{t('Detail:year')}: </h3>
            <p className={styles.value}> {book.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;
