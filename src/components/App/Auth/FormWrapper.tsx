import logo from '../../../assets/wolox-brand.png';

import styles from './FormWrapper.module.scss';

interface Props {
  children: React.ReactNode;
}

function FormWrapper({ children }: Props) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="wolox-brand" />
      {children}
    </div>
  );
}

export default FormWrapper;
