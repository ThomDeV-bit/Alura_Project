import { DynamicModule } from '@nestjs/common';
import { TYPEORM_TOKENS } from './tokens';
import { ConfigurableModuleClass, OPTIONS_TYPE } from './typeorm.module-definition';
import { UserEntity } from '../entites/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../config/database-cli';
import { OrderEntity } from '../entites/order.entity';
import { ItensByOrderEntity } from '../entites/itensByOrder.entity';
import { CharacteristicsEntity } from '../entites/characteristics-product.entity';
import { CategorieEntity } from '../entites/categories.entity';
import { ImageProductEntity } from '../entites/image-product.entity';
import { ProductEntity } from '../entites/product.entity';

export class TypeormModule extends ConfigurableModuleClass {
    static register(options: typeof OPTIONS_TYPE): DynamicModule {
        const schemaEntities = [
            UserEntity, OrderEntity, ImageProductEntity, ItensByOrderEntity,
            ItensByOrderEntity, CharacteristicsEntity,
            CategorieEntity,ProductEntity];
        const config = dataSourceOptions;
        return {
            module: TypeormModule,
            global: true,
            imports: [
                TypeOrmModule.forFeature(schemaEntities),
                TypeOrmModule.forRootAsync({
                    useFactory: async () => {
                        return {
                            autoLoadEntities: true,
                            ...config,
                        };
                    },
                }),
            ],
            exports: [TYPEORM_TOKENS.USER_REPOSITORY, TYPEORM_TOKENS.ORDER_REPOSITORY],
            providers: [
                {
                    provide: TYPEORM_TOKENS.USER_REPOSITORY,
                    useClass: options.userRepository,
                },
                {
                    provide: TYPEORM_TOKENS.ORDER_REPOSITORY,
                    useClass: options.orderRepository,
                },
            ],
        };
    }
}
