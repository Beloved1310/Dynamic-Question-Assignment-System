import Joi from "joi";

export const userValidation = {
  create: Joi.object({
    username: Joi.string().trim().required(),
    region: Joi.string().trim().required(),
    email: Joi.string().email().required(),
  }),
};
