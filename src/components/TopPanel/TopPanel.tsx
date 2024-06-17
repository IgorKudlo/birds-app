import styles from './TopPanel.module.css';
import logo from '@/assets/logo.svg';

export const TopPanel = () => {
  return (
    <div className={styles.topPanel}>
      <img src={logo} className={styles.logo} alt="SongBird" />
      <div>Score: 0</div>
    </div>
  );
};