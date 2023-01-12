import Header from "../Header/Header";
import Main from "../pages/Main";
import styles from "./App.module.scss";
import { useState, useCallback } from "react";

function App() {
  const [score, setScore] = useState<number>(0);
  const [attemptsAnswer, setAttemptsAnswer] = useState<number>(5);

  const changeAttemtsAnswer = useCallback(() => {
    setAttemptsAnswer(attemptsAnswer - 1);
  }, [attemptsAnswer]);

  const changeScore = useCallback(() => {
    setScore(score + attemptsAnswer);
    setAttemptsAnswer(5);
  }, [attemptsAnswer, score]);

  return (
    <div className={styles.container}>
      <Header score={score} />
      <Main
        changeAttemtsAnswer={changeAttemtsAnswer}
        changeScore={changeScore}
      />
    </div>
  );
}

export default App;
