import { CreateUserControl } from "interfaces/CreateUserControl";
import { CreateUserRepo } from "repositories/CreateRepository";
import { container } from "tsyringe";

const createUserController = new CreateUserControl(
  container.resolve(CreateUserRepo)
);

export { createUserController };
