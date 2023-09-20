import { DataSource, DataSourceOptions } from 'typeorm';

import { UserEntity } from '../entites/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123',
  database: 'loja',
  entities: [UserEntity],
  migrations: [],
  logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
