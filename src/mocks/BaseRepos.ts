import { User } from "../interfaces/User";
import { users } from "./BankRepo";
import { IBaseRepo } from "./UserRepository";

export class BaseRepo implements IBaseRepo {
  create(user: User): void {
    users.push(user);
  }
}
