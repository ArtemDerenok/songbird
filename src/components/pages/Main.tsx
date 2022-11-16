import AnswersTable from "../AnswersTable/AnswersTable";
import InfoBar from "../InfoBar/InfoBar";
import NextLevelBtn from "../NextLevelBtn/NextLevelBtn";
import QuestionBar from "../QuestionBar/QuestionBar";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.container}>
      <QuestionBar />
      <div className={styles.answers_table}>
        <AnswersTable />
        <InfoBar />
      </div>
      <NextLevelBtn />
    </main>
  );
};

export default Main;
