import { Request, Response, NextFunction } from "express";
import { users } from "../mocks/BankRepo";
import { userValidation } from "../validation/ValidationBody";

export const validation =
  (schema: typeof userValidation) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body: typeof users = req.body;

    try {
      await schema.validate(body);
      next();
    } catch (err) {
      return res.status(400).json({ err });
    }
  };
