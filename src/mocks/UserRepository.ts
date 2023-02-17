import { User } from "../interfaces/User";
export interface IBaseRepo {
  create(user: User): void;
}
