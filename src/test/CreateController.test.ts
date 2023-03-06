/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";
import { Request, Response } from "express";
import { CreateUserControl } from "@interfaces/CreateUserControl";
import { createUserController } from "@controller/CreateUserIndex";

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

  describe("CreateUserRepo", () => {
    test("Should return unprocessable entity when pass invalid data", async () => {
      await CreateUserControl.CreateUserRepo(MockRequest, MockResponse);

      expect(MockResponse.status).toBeCalledWith(422);
      expect(MockResponse.json).toBeCalled();
    });

    test("Should return created when pass valid data", async () => {
      MockRequest.body = {
        ...MockedUser,
        ...{ email_confirmation: MockedUser.email },
      };
      jest
        .spyOn(IUserRequestDTO.prototype, "create")
        .mockReturnValueOnce(MockedUser);

      await createUserController.handle(MockRequest, MockResponse);

      expect(MockResponse.status).toBeCalledWith(201);
      expect(MockResponse.send).toBeCalledWith(MockedUser);
    });
  });
});
