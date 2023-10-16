import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../entites/user.entity';
import { OrderEntity } from '../entites/order.entity';
import { ItensByOrderEntity } from '../entites/itensByOrder.entity';
import { CharacteristicsEntity } from '../entites/characteristics-product.entity';
import { ImageProductEntity } from '../entites/image-product.entity';
import { CategorieEntity } from '../entites/categories.entity';
import { ProductEntity } from '../entites/product.entity';
import { Migrations1697486628487 } from '../migrations/1697486628487-migrations';

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
            cache: true,
            entities: [
                UserEntity, OrderEntity, ItensByOrderEntity,
                CharacteristicsEntity, CategorieEntity,
                ImageProductEntity, ProductEntity],
            migrations: [Migrations1697486628487],
        };
    }
}
