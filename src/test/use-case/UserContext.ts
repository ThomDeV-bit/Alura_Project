import { IUser } from 'src/domain/users/user.domain';

export class UserContext implements IUser {
  constructor(user?: Partial<IUser>) {
    (this.id = user.id), (this.name = user.name);
    this.mail = user.mail;
    this.password = user.password;
  }
  id?: string;
  name: string;
  mail: string;
  password: string;
}
