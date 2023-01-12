import { useDispatch } from "react-redux";
import {
  changeRoundActionCreator,
  resetRoundActionCreator,
} from "../../redux/reducers/questionsReducer";
import styles from "./NextLevelBtn.module.scss";
import useTypeSelector from "./../../hooks/useTypeSelector";

interface INextLevelBtn {
  isRightAnswer: boolean;
  changeIsRightAnswer: () => void;
  changeRightAnswerId: () => void;
  resetScore: () => void;
}

const NextLevelBtn = ({
  isRightAnswer,
  changeIsRightAnswer,
  changeRightAnswerId,
  resetScore,
}: INextLevelBtn) => {
  const dispatch = useDispatch();
  const round = useTypeSelector((state) => state.round);

  return (
    <button
      className={`${styles.button} ${
        isRightAnswer === true ? styles.active : ""
      }`}
      type="button"
      onClick={() => {
        if (isRightAnswer) {
          changeIsRightAnswer();
          changeRightAnswerId();

          if (round === 5) {
            dispatch(resetRoundActionCreator());
            resetScore();
          } else {
            dispatch(changeRoundActionCreator());
          }
        }
        return false;
      }}
    >
      Следующий уровень
    </button>
  );
};

export default NextLevelBtn;
