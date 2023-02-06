import { User } from "../validation/UserValidator";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
