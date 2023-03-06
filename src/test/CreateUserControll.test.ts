import "reflect-metadata";
import { Request, Response } from "express";
import { createUser } from "@controller/CreateUser";
import { CreateUserControl } from "@interfaces/CreateUserControl";

describe("CreateUserControl", () => {
  const MockRequest = {
    body: {},
  } as unknown as Request;
  const MockResponse = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
    json: jest.fn(),
  } as unknown as Response;
  const MockedUser = {
    full_name: "Djênifer Gurskas",
    email: "gurskasdjenifer@gmail.com",
    email_confirmation: "gurskasdjenifer@gmail.com",
    cpf: "60058023054",
    cellphone: "51996898001",
    birthdate: "09/01/2000",
    email_sms: true,
    whatsapp: true,
    country: "Brasil",
    city: "Porto Alegre",
    address: "Rua de Flores",
    postal_code: "000000000",
    number: "190",
  };

  const createUser = new createUser();
  const CreateUserControl = new CreateUserControl(createUser);

  describe("Testes User Controller", () => {
    const response = CreateUserControl.handle(MockRequest, MockResponse);

    test("Retorno de Json", () => {
      expect(response).toHaveProperty("json");
    });

    test("Retorno de Status", () => {
      expect(response).toHaveProperty("status");
    });
  });
});
