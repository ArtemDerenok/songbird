import IQuestionsSate from "../../types/interfaces";
import birdsData from "../../utils/data";

const defaultState: IQuestionsSate = {
  questions: birdsData,
  currentGame: birdsData[0],
}

const questionsReducer = (state = defaultState, action: { type: string, payload: [] }) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return state;
    default:
      return state;
  }
}

export default questionsReducer;
