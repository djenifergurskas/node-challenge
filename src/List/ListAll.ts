import { Request, Response } from "express";
import { users } from "mocks/BankRepo";

export class allUsers {
  handle(req: Request, res: Response) {
    res.status(200).send(users);
  }
}
