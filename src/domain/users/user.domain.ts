import { IUserResponse } from './dto/user-response.dto';

export interface IUser {
  id?: string;
  name: string;
  mail: string;
  password: string;
}

export function factoryUser(name, mail) {
  return new IUserResponse(name, mail);
}
