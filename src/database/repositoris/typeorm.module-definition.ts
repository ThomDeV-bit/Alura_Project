import { ConfigurableModuleBuilder, Type } from '@nestjs/common';
import { IUserRepository } from '../entites/user.entity';
import { IOrderRepository } from '../entites/order.entity';

interface ModuleOptions {
    userRepository: Type<IUserRepository>;
    orderRepository: Type<IOrderRepository>;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
    new ConfigurableModuleBuilder<ModuleOptions>().build();
