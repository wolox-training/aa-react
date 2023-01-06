import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import LocalStorageService from '../../services/LocalStorageService';
import { booksList } from '../../services/ApiService';
import logo from '../../assets/wolox-brand.png';
import BooksList from '../../components/App/Home/books-list';

import styles from './styles.module.scss';

function Home() {
  const { t } = useTranslation();

  const { isLoading, isError, data } = useQuery('books', booksList);

  const handleLogout = () => {
    LocalStorageService.removeValue('token');
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError || !data || !data.data) {
    return <span>Error getting the books list</span>;
  }

  return (
    <>
      <nav className={styles.navbar}>
        <img src={logo} alt="wolox" />
        <Link className={styles.logout} onClick={handleLogout} to="/">
          {t('Home:logout')}
        </Link>
      </nav>
      <BooksList books={data.data} />
    </>
  );
}

export default Home;
