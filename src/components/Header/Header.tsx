import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top_panel}>
        <div className={styles.top_panel_logo}></div>
        <p className={styles.top_panel_score}>Score: 0</p>
      </div>
      <ul className={styles.pagination}>
        <li className={styles.pagination_item}>Разминка</li>
        <li className={styles.pagination_item}>Воробьиные</li>
        <li className={styles.pagination_item}>Лесные птицы</li>
        <li className={styles.pagination_item}>Певчие птицы</li>
        <li className={styles.pagination_item}>Хищные птицы</li>
        <li className={styles.pagination_item}>Морские птицы</li>
      </ul>
    </header>
  );
};

export default Header;
