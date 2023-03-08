import { User } from "../User/User";
export interface IBaseRepo {
  create(user: User): void;
}
