import { DynamicModule } from '@nestjs/common';
import { ConfigurableModuleClass, OPTIONS_TYPE } from './api.module-definition';
import { UsersController } from './controlers/users.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalResponse } from 'src/common/baseResponse/globalResponse';

export class ApiModule extends ConfigurableModuleClass {
  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    return {
      module: ApiModule,
      controllers: [UsersController],
      global: true,
      imports: [options.useCasesModule],
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: GlobalResponse,
        },
      ],
    };
  }
}
