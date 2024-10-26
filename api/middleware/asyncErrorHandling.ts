import { Request, Response, NextFunction } from "express";

export const asyncErrorHandling = (handler: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (ex: any) {
      res.status(ex.status || 500).send({ message: ex.message });
      next(ex);
    }
  };
};