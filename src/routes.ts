import { Request, Response, Router } from "express";
import { listUserUseCase } from "list/ListCase";

import { validation } from "./controller/ValidationHandle";
import { userValidation } from "./validation/ValidationBody";
import { createUserController } from "@controller/CreateUserIndex";

export const router = Router();
router.get("/customize", listUserUseCase.list);
router.post(
  "/create-user",
  validation(userValidation),
  (req: Request, res: Response) => {
    return createUserController.handle(req, res);
  }
);
