import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LocalStorageService from '../../services/LocalStorageService';
import logo from '../../assets/wolox-brand.png';

import styles from './styles.module.scss';

function Home() {
  const { t } = useTranslation();

  const handleLogout = () => {
    LocalStorageService.removeValue('token');
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="wolox" />
      <Link className={styles.logout} onClick={handleLogout} to="/">
        {t('Home:logout')}
      </Link>
    </nav>
  );
}

export default Home;
