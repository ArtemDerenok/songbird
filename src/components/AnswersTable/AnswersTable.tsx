import { IBirdInfo } from "../../types/interfaces";
import useTypeSelector from "./../../hooks/useTypeSelector";
import styles from "./AnswersTable.module.scss";

interface IAnswerTable {
  handleBirdInfo: (data: IBirdInfo) => void;
  checkRightAnswer: (id: number | undefined) => void;
  isRightAnswer: boolean;
}

const AnswersTable = ({
  handleBirdInfo,
  checkRightAnswer,
  isRightAnswer,
}: IAnswerTable) => {
  const questions = useTypeSelector((state) => state.currentGame);

  return (
    <ul className={styles.list}>
      {questions.map((elem) => (
        <li
          onClick={(e) => {
            if (!isRightAnswer) {
              const data = {
                bird: questions.find(
                  (elem) => elem.name === e.currentTarget.innerText
                ),
                isBegin: false,
              };

              handleBirdInfo(data);
              checkRightAnswer(data.bird?.id);
            }
          }}
          key={elem.id}
        >
          {elem.name}
        </li>
      ))}
    </ul>
  );
};

export default AnswersTable;
