import { User } from "../User/User";

export interface ICreateUserRepo {
  create(user: User): void;
}
