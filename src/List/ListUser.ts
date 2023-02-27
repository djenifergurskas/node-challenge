import { Request, Response } from "express";
import { users } from "../mocks/BankRepo";

export class ListUser {
  list(req: Request, res: Response) {
    try {
      res.status(201).send(users);
    } catch (err) {
      return res.status(500).send("Unxpected error");
    }
  }
}
