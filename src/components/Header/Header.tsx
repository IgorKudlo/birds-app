import styles from  './Header.module.css';
import { TopPanel, Navigation } from '@/components';

export const Header = () => {
  return (
    <header className={styles.header}>
      <TopPanel />
      <Navigation />
    </header>
  );
};