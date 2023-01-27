import fastify from "fastify";
import { z } from "zod";
import createPerson from "./domain/user/services/CustomerValidator";
import users from "./mocks/CustomerMock";

const routes = fastify();

routes.get("/users", () => users);

routes.post("/users", (request, reply) => {
  try {
    const user = createPerson.parse(request.body);
    users.push(user);
    return user;
  } catch (error) {
    const errorJson = JSON.stringify(error);
    if (error instanceof z.ZodError) return reply.status(400).send(errorJson);
    else return reply.status(500).send(errorJson);
  }
});

routes.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
