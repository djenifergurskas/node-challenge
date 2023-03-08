import { User } from "User/User";
import { users } from "mocks/BankRepo";

export class createUser {
  create(user: User): void {
    users.push(user);
  }
}
