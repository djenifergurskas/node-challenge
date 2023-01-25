import { z } from "zod";
import createPerson from "../domain/user/services/CustomerValidator";

type User = z.infer<typeof createPerson>;
const users: User[] = [];

export default users;
