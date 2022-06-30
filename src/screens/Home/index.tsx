import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';

function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt={t('Home:logoAlt')} />
        <p className={styles.text}>{t('Home:welcome')}</p>
      </header>
    </div>
  );
}

export default Home;
