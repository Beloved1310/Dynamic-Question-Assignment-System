import { Request, Response } from "express";
import { questionValidation } from "../../validation/question.validation";
import { ResponseService } from "../service/response.service";
import { questionService } from "./question.service";

export const questionController = {
  async createQuestionForRegion(req: Request, res: Response): Promise<{}> {
    const { value, error } = questionValidation.create.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    const data = await questionService.createQuestionForRegion(value);
    return ResponseService.success(
      res,
      "Question Created Successfully",
      data
    );
  },
};
