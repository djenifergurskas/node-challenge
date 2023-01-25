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

const person = {
  full_name: "Djênifer",
  email: "gurskasdjenifer@gmail.com",
  email_confirmation: "gurskasdjenifer@gmail.com",
  cpf: "60058021105",
  cellphone: "5134921300",
  birthdate: true,
  email_sms: true,
  whatsapp: true,
  country: "Brasil",
  city: "Porto Alegre",
  postal_code: "94445420",
  address: "Rua das Flores",
  number: 137,
};

type UserInput = z.input<typeof createPerson>;
type UserOutput = z.infer<typeof createPerson>;

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
  postal_code,
  address,
  number,
} = createPerson.parse(person);

function createPersonInDataBase(person: UserInput) {}

function createPersonOutDataBase(person: UserOutput) {}

export default createPerson;
