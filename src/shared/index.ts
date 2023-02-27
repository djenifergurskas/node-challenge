import { container } from "tsyringe";
import { ICreateUserRepo } from "@repositories/ICreateRepository";
import { CreateUserRepo } from "@repositories/CreateRepository";

container.registerSingleton<ICreateUserRepo>(
  "CrateUserRepository",
  CreateUserRepo
);
