import fastify from "fastify";
import { z } from "zod";
import createPerson from "./domain/user/services/CustomerValidator.js";
import users from "./mocks/CustomerMock.js";
var routes = fastify();
routes.get("/users", function () {
  return users;
});
routes.post("/users", function (request, reply) {
  try {
    var user = createPerson.parse(request.body);
    users.push(user);
    return user;
  } catch (error) {
    var errorJson = JSON.stringify(error);
    if (error instanceof z.ZodError) return reply.status(400).send(errorJson);
    else return reply.status(500).send(errorJson);
  }
});
routes.listen({ port: 3000 }, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server listening at ".concat(address));
});
