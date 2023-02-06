export class User {
  public full_name!: string;
  public email!: string;
  public email_confirmation!: string;
  public cpf!: string;
  public cellphone!: string;
  public birthdate!: Date;
  public email_sms!: boolean;
  public whatsapp!: boolean;
  public country!: string;
  public city!: string;
  public address!: string;
  public postal_code!: string;
  public number!: number;

  constructor(props: Omit<User, "full_name">) {
    Object.assign(this, props);
  }
}
