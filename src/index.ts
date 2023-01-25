import users from "./mocks/CustomerMock";
import fastify from "fastify";

const app = fastify();

app.get("/users", (request, reply) => users);

app.post("/users", (request, reply) => users);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
