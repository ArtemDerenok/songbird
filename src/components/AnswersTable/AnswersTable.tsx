import styles from "./AnswersTable.module.scss";

const AnswersTable = () => {
  return (
    <ul className={styles.list}>
      <li>Ворон</li>
      <li>Журавль</li>
      <li>Ласточка</li>
      <li>Козодой</li>
      <li>Кукушка</li>
      <li>Синица</li>
    </ul>
  );
};

export default AnswersTable;
