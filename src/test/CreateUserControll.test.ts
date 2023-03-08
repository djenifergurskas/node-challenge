import "reflect-metadata";

import { CreateUserControl } from "../interfaces/CreateUserControl";
import { CreateUserRepo } from "../repositories/CreateRepository";
import { Request, Response } from "express";
import { userMocked } from "../mocks/UserMocked";

const MockRequest: Request = {
  body: userMocked,
} as Request;

const MockResponse: Response = {
  json: MockRequest.body,
  status: 201,
} as unknown as Response;

const CreateRepo = new CreateUserRepo();
const CreateControl = new CreateUserControl(CreateRepo);

describe("Test User controller", () => {
  const response = CreateControl.handle(MockRequest, MockResponse);

  test("Json", () => {
    expect(response).toHaveProperty("json");
  });

  test("Status", () => {
    expect(response).toHaveProperty("status");
  });
});
