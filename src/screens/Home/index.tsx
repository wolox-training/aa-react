import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

import logo from '../../assets/wolox-brand.png';

import styles from './styles.module.scss';

function Home() {
  // const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="wolox" />
      <Link className={styles.logout} to="/">
        Logout
      </Link>
    </nav>
  );
}

export default Home;
