import { ConfigurableModuleBuilder, Type } from '@nestjs/common';
import { IUserRepository } from '../entites/user.entity';
import { IOrderRepository } from '../entites/order.entity';
import { IProductRepository } from '../entites/product.entity';

interface ModuleOptions {
    userRepository: Type<IUserRepository>;
    orderRepository: Type<IOrderRepository>;
    productRepository : Type<IProductRepository>;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
    new ConfigurableModuleBuilder<ModuleOptions>().build();
