import { ConfigurableModuleBuilder, Type } from '@nestjs/common';
import { IUserRepoisotry } from '../entites/user.entity';

interface ModuleOptions {
  userRepository: Type<IUserRepoisotry>;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<ModuleOptions>().build();
