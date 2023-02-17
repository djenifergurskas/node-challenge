import { Request, Response } from "express";
import { users } from "../mocks/BankRepo";

export class ListUser {
  static list(arg0: string, list: any) {
    throw new Error("Method not implemented.");
  }
  list(req: Request, res: Response) {
    try {
      res.status(201).send(users);
    } catch (err) {
      return res.status(500).send("Unexpected error");
    }
  }
}
