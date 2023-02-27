export class User {
  public full_name: string;
  public email: string;
  public email_confirmation: string;
  public cpf: string;
  public cellphone: string;
  public birthdate: Date;
  public email_sms: boolean;
  public whatsapp: boolean;
  public country: string;
  public city: string;
  public postal_code: string;
  public address: string;
  public number: number;

  constructor(
    full_name: string,
    email: string,
    email_confirmation: string,
    cpf: string,
    cellphone: string,
    birthdate: Date,
    email_sms: boolean,
    whatsapp: boolean,
    country: string,
    city: string,
    postal_code: string,
    address: string,
    number: number
  ) {
    (this.full_name = full_name),
      (this.email = email),
      (this.email_confirmation = email_confirmation),
      (this.cpf = cpf),
      (this.cellphone = cellphone),
      (this.birthdate = birthdate),
      (this.email_sms = email_sms),
      (this.whatsapp = whatsapp),
      (this.country = country),
      (this.city = city),
      (this.postal_code = postal_code),
      (this.address = address),
      (this.number = number);
  }
}
