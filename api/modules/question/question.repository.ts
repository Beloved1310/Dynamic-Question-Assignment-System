import Question, { IQuestion } from "../../model/question.model";

export const questionRepository = {
  async getOneQuestion(credential: {}): Promise<IQuestion | null> {
    const question = await Question.findOne(credential).select("-__v");
    return question;
  },
  
  async createQuestion(createQuestion: {}): Promise<Partial<IQuestion>> {
    const createdQuestion = await Question.create(createQuestion);
    return createdQuestion;
  },

};
 