import styles from './Navigation.module.css';

const navigation = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

export const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      {navigation.map(((item, index) => (
        <li className={styles.item} key={index}>{item}</li>
      )))}
    </ul>
  );
};