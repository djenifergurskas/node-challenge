import { z } from "zod";
var createPerson = z.object({
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
var person = {
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
var _a = createPerson.parse(person), full_name = _a.full_name, email = _a.email, email_confirmation = _a.email_confirmation, cpf = _a.cpf, cellphone = _a.cellphone, birthdate = _a.birthdate, email_sms = _a.email_sms, whatsapp = _a.whatsapp, country = _a.country, city = _a.city, postal_code = _a.postal_code, address = _a.address, number = _a.number;
export default createPerson;
