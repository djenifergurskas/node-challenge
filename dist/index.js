import users from "./mocks/CustomerMock.js";
import fastify from "fastify";

var app = fastify();
app.get("/users", function (request, reply) {
  return users;
});
app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server listening at ".concat(address));
});
