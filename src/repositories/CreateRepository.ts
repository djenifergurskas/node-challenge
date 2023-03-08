import { User } from "../User/User";
import { users } from "../mocks/BankRepo";
import { ICreateUserRepo } from "./ICreateRepository";

export class CreateUserRepo implements ICreateUserRepo {
  create(user: User): void {
    users.push(user);
  }
}
