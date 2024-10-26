import { IQuestion } from "../../model/question.model";
import { questionRepository } from "./question.repository";

export const questionService = {
  async createQuestionForRegion(createQuestion: IQuestion) {
    const question = await questionRepository.createQuestion(createQuestion);
    return question;
  },
};
