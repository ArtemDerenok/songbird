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
}

export default IQuestionsSate;
