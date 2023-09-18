import { IUser } from 'src/domain/users/user.domain';
import { EntitySchema } from 'typeorm';
export const UserEntity = new EntitySchema<IUser>({
  name: 'users',
  tableName: 'users',
  columns: {
    id: {
      name: 'id',
      type: 'varchar',
      primary: true,
      nullable: false,
    },
    name: {
      name: 'name',
      type: 'varchar',
      nullable: false,
    },
    mail: {
      name: 'mail',
      type: 'varchar',
      nullable: false,
    },
    password: {
      name: 'password',
      type: 'varchar',
      nullable: false,
    },
  },
});

export interface IUserRepoisotry {
  search(): Promise<IUser[]>;
}
