import { Request, Response } from "express";
import { users } from "mocks/BankRepo";

export class createUser {
  create(req: Request, res: Response) {
    const User = req.body;
    users.push(User);
    return res.status(201).send("Usuário criado com sucesso!");
  }
}
