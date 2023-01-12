import { useState, useEffect, useMemo } from "react";
import { IBirdInfo } from "../../types/interfaces";
import AnswersTable from "../AnswersTable/AnswersTable";
import InfoBar from "../InfoBar/InfoBar";
import NextLevelBtn from "../NextLevelBtn/NextLevelBtn";
import QuestionBar from "../QuestionBar/QuestionBar";
import styles from "./Main.module.scss";
import getRandomNum from "./../../utils/utils";

interface IMain {
  changeAttemtsAnswer: () => void;
  changeScore: () => void;
  resetScore: () => void;
}

const Main = ({ changeAttemtsAnswer, changeScore, resetScore }: IMain) => {
  const [birdInfo, setBirdInfo] = useState<IBirdInfo>({
    bird: {
      id: 0,
      name: "",
      species: "",
      description: "",
      image: "",
      audio: "",
    },
    isBegin: true,
  });
  const [rightAnswerId, setRightAnswerId] = useState<number>(
    getRandomNum(1, 6)
  );

  const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false);

  const changeIsRightAnswer = () => {
    setIsRightAnswer(!isRightAnswer);
  };

  const changeRightAnswerId = () => {
    setRightAnswerId(getRandomNum(1, 6));
  };

  const winSound = useMemo(() => new Audio("error.mp3"), []);
  const errorSound = useMemo(() => new Audio("win.mp3"), []);

  const checkRightAnswer = (id: number | undefined) => {
    if (rightAnswerId === id) {
      winSound.currentTime = 0.0;
      winSound.play();
      changeIsRightAnswer();
      changeScore();
    } else {
      errorSound.currentTime = 0.0;
      errorSound.play();
      changeAttemtsAnswer();
    }
  };

  const handleBirdInfo = (data: IBirdInfo) => {
    setBirdInfo(data);
  };

  return (
    <main className={styles.container}>
      <QuestionBar
        rightAnswerId={rightAnswerId}
        isRightAnswer={isRightAnswer}
      />
      <div className={styles.answers_table}>
        <AnswersTable
          handleBirdInfo={handleBirdInfo}
          checkRightAnswer={checkRightAnswer}
          isRightAnswer={isRightAnswer}
        />
        <InfoBar birdInfo={birdInfo} />
      </div>
      <NextLevelBtn
        isRightAnswer={isRightAnswer}
        changeIsRightAnswer={changeIsRightAnswer}
        changeRightAnswerId={changeRightAnswerId}
        resetScore={resetScore}
      />
    </main>
  );
};

export default Main;
