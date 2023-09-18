import { DynamicModule } from '@nestjs/common';
import { USERS_USE_CASES } from './users';

export class UseCasesModule {
  static register(): DynamicModule {
    return {
      module: UseCasesModule,
      global: true,
      exports: [...USERS_USE_CASES],
      providers: [...USERS_USE_CASES],
    };
  }
}
