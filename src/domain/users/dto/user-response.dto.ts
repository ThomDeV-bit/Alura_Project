export class IUserResponse {
  constructor(name: string, mail: string) {
    this.name = name;
    this.mail = mail;
  }
  name: string;
  mail: string;
}
