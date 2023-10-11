import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../entites/user.entity';
import { OrderEntity } from '../entites/order.entity';
import { ItensByOrderEntity } from '../entites/itensByOrder.entity';
import { Migrations1697052902505 } from '../migration/1697052902505-migrations';

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
            entities: [UserEntity, OrderEntity, ItensByOrderEntity],
            migrations: [Migrations1697052902505],
        };
    }
}
