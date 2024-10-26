import Joi from "joi";


export const questionValidation = {
  create: Joi.object({
    content: Joi.string().trim().required(),
    region: Joi.string().trim().required(),
    cycleIndex:Joi.number().optional()
  }),
};
