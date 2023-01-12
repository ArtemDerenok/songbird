import useTypeSelector from "../../hooks/useTypeSelector";
import styles from "./QuestionBar.module.scss";

interface IQuestionBar {
  rightAnswerId: number;
  isRightAnswer: boolean;
}

const QuestionBar = ({ rightAnswerId, isRightAnswer }: IQuestionBar) => {
  const question = useTypeSelector((state) =>
    state.currentGame.find((elem) => elem.id === rightAnswerId)
  );

  return (
    <section className={styles.container}>
      {isRightAnswer === false ? (
        <>
          <img src="unknownBird.jpg" alt="bird" />
          <div>
            <p>******</p>
            <audio src={question?.audio} controls></audio>
          </div>
        </>
      ) : (
        <>
          <img src={question?.image} alt={question?.name} />
          <div>
            <p>{question?.name}</p>
            <audio src={question?.audio} controls></audio>
          </div>
        </>
      )}
    </section>
  );
};

export default QuestionBar;
