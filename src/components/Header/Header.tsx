import { useMemo } from "react";
import useTypeSelector from "../../hooks/useTypeSelector";
import styles from "./Header.module.scss";

interface IHeader {
  score: number;
}

const Header = ({ score }: IHeader) => {
  const round = useTypeSelector((state) => state.round);
  const roundNames = useMemo(
    () => [
      "Разминка",
      "Воробьиные",
      "Лесные птицы",
      "Певчие птицы",
      "Хищные птицы",
      "Морские птицы",
    ],
    []
  );

  return (
    <header className={styles.header}>
      <div className={styles.top_panel}>
        <div className={styles.top_panel_logo}></div>
        <p className={styles.top_panel_score}>Score: {score}</p>
      </div>
      <ul className={styles.pagination}>
        {roundNames.map((elem, index) => (
          <li
            key={index}
            className={`${styles.pagination_item} ${
              round === index ? styles.active : ""
            }`}
          >
            {elem}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
