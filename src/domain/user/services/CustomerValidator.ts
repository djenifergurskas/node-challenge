import { z } from "zod";

const createPerson = z.object({
  full_name: z.string().min(3, { message: "Invalid name!" }),
  email: z.string().min(15, { message: "Invalid e-mail!" }).email().nullable(),
  email_confirmation: z.string().email().nullable(),
  cpf: z.string().min(11, { message: "Invalid CPF!" }),
  cellphone: z.string(),
  birthdate: z.boolean(),
  email_sms: z.boolean(),
  whatsapp: z.boolean(),
  country: z.string(),
  city: z.string(),
  address: z.string(),
  postal_code: z.string(),
  number: z.number(),
});

export default createPerson;
