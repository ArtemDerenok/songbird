interface IQuestionsSate {
  questions: {
    id: number,
    name: string,
    species: string,
    description: string,
    image: string,
    audio: string,
  }[][],
  currentGame: {
    id: number,
    name: string,
    species: string,
    description: string,
    image: string,
    audio: string,
  }[],
  round: number,
}

export interface IBirdInfo {
  bird: {
    id: number,
    name: string,
    species: string,
    description: string,
    image: string,
    audio: string,
  } | undefined,
  isBegin: boolean,
}

export default IQuestionsSate;
