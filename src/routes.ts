import { Request, Response, Router } from "express";
import { validation } from "./controller/ValidationHandle";
import { CreateController } from "./interfaces/UserController";

import { ListUser } from "./List/ListUser";
import { userValidation } from "./validation/ValidationBody";

export const router = Router();
router.get("/customize", ListUser.list);
router.post(
  "/create-user",
  validation(userValidation),
  (req: Request, res: Response) => {
    return CreateController.handle(req, res);
  }
);
