import { useTranslation } from 'react-i18next';

import SignUp from 'screens/SignUp';

import { languages } from '../../constants/languages';
import TranslationLogo from '../../assets/translation-logo.png';

import styles from './index.module.scss';

function App() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <SignUp />
      <div className={styles.language}>
        <img className={styles.logo} src={TranslationLogo} alt="translate" />
        <select className={styles.selector} onChange={(evt) => i18n.changeLanguage(evt.target.value)}>
          {languages.map(({ id, flag, name }) => (
            <option key={id} value={id}>
              {flag} {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
