import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../entites/user.entity';
import { OrderEntity } from '../entites/order.entity';
import { ItensByOrderEntity } from '../entites/itensByOrder.entity';
import { Migrations1697052902505 } from '../migration/1697052902505-migrations';
import { CharacteristicsEntity } from '../entites/characteristics-product.entity';
import { ImageProductEntity } from '../entites/image-product.entity';
import { ProductEntity } from '../entites/product.entity';
import { CategorieEntity } from '../entites/categories.entity';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'loja',
    entities: [
        ImageProductEntity,
        UserEntity, OrderEntity, ItensByOrderEntity,
        CharacteristicsEntity, CategorieEntity,
        ProductEntity
    ],
            
    migrations: [Migrations1697052902505],
    logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
