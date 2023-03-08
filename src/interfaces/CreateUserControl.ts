import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICreateUserRepo } from "@repositories/ICreateRepository";
import { IUserRequestDTO } from "./CreateUserRequest";

@injectable()
export class CreateUserControl {
  constructor(
    @inject("CreateUserRepository")
    private createUser: ICreateUserRepo
  ) {}

  handle(req: Request, res: Response) {
    const user: IUserRequestDTO = req.body;

    try {
      this.createUser.create(user);
      return res.status(201).send("User created");
    } catch (err) {
      return res;
    }
  }
}
