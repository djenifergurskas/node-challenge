import { IUsersRepository } from "../repositories/IUserRepository";
import { User } from "../validation/UserValidator";
import { IUserRequestDTO } from "./CreateUserRequest";

export class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
