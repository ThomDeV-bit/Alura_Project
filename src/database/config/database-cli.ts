import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../entites/user.entity';
import { OrderEntity } from '../entites/order.entity';
import { ItensByOrderEntity } from '../entites/itensByOrder.entity';
import { CharacteristicsEntity } from '../entites/characteristics-product.entity';
import { ImageProductEntity } from '../entites/image-product.entity';
import { ProductEntity } from '../entites/product.entity';
import { CategorieEntity } from '../entites/categories.entity';
import { Migrations1697240210375 } from '../1697240210375-migrations';

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
            
    migrations: [Migrations1697240210375],
    logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
