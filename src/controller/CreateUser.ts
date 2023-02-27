import { User } from "@interfaces/User";
import { users } from "mocks/BankRepo";

export class createUser {
  create(user: User): void {
    users.push(user);
  }
}
