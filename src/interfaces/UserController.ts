import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateController {
  static handle: any;
  constructor(private createUser: CreateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      full_name,
      email,
      email_confirmation,
      cpf,
      cellphone,
      birthdate,
      email_sms,
      whatsapp,
      country,
      city,
      address,
      postal_code,
      number,
    } = request.body;

    try {
      await this.createUser.execute({
        full_name,
        email,
        email_confirmation,
        cpf,
        cellphone,
        birthdate,
        email_sms,
        whatsapp,
        country,
        city,
        address,
        postal_code,
        number,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).send("Error.");
    }
  }
}
