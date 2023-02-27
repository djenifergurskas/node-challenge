import { User } from "../interfaces/User";

export interface ICreateUserRepo {
  create(user: User): void;
}
