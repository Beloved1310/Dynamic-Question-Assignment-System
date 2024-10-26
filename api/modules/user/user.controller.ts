import { Request, Response } from "express";
import { userValidation } from "../../validation/user.validation";
import { ResponseService } from "../service/response.service";
import { userService } from "./user.service";

export const userController = {
  async createAccount(req: Request, res: Response): Promise<{}> {
    const { value, error } = userValidation.create.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    const data = await userService.createUser(value);
   
    return ResponseService.success(
      res,
      "Welcome! You have successfully sign up. Proceed to login",
      data
    );
  },
};
