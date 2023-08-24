import { DataSource, DataSourceOptions } from 'typeorm';

import { OrderEntity } from '../../database/entites/order.entity';
import { UserEntity } from '../entites/user.entity';
import { CreateTables1692904564459 } from '../migration/1692904564459-create-tables';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123',
  database: 'loja',
  entities: [UserEntity, OrderEntity],
  migrations: [CreateTables1692904564459],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
