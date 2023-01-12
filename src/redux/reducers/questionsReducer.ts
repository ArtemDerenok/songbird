import IQuestionsSate from "../../types/interfaces";
import birdsData from "../../utils/data";

export enum types {
  GET_QUESTIONS = 'GET_QUESTIONS',
  CHANGE_ROUND = 'CHANGE_ROUND',
  RESET_ROUND = 'RESET_ROUND',
}

const defaultState: IQuestionsSate = {
  questions: birdsData,
  currentGame: birdsData[0],
  round: 0,
}

const questionsReducer = (state = defaultState, action: { type: string, payload: [] }) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return state;
    case types.CHANGE_ROUND:
      return { ...state, round: state.round + 1, currentGame: state.questions[state.round + 1] }
    case types.RESET_ROUND:
      return { ...state, round: 0, currentGame: state.questions[0] }
    default:
      return state;
  }
}

export const changeRoundActionCreator = () => ({ type: types.CHANGE_ROUND });

export const resetRoundActionCreator = () => ({ type: types.RESET_ROUND });

export default questionsReducer;
