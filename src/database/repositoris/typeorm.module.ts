import { DynamicModule } from '@nestjs/common';
import { TYPEORM_TOKENS } from './tokens';

import {
  ConfigurableModuleClass,
  OPTIONS_TYPE,
} from './typeorm.module-definition';
import { UserEntity } from '../entites/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../config/database-cli';

export class TypeormModule extends ConfigurableModuleClass {
  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    const schemaEntities = [UserEntity];
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
      exports: [TYPEORM_TOKENS.USER_REPOSITORY],
      providers: [
        {
          provide: TYPEORM_TOKENS.USER_REPOSITORY,
          useClass: options.userRepository,
        },
      ],
    };
  }
}
