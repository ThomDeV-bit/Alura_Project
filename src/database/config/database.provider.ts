import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../entites/user.entity';
import { CreateTables1692904564459 } from '../migration/1692904564459-create-tables';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'loja',
      entities: [UserEntity],
      migrations: [CreateTables1692904564459],
    };
  }
}
