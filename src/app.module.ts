import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from './database/repositoris/typeorm.module';
import { RepositoryModule } from './database/repositoris/repository.module';
import { ApiModule } from './api/api.module';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({})
export class AppModule {
  static register(): DynamicModule {
    const imports = [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      TypeormModule.register(RepositoryModule.register()),
      ApiModule.register({
        useCasesModule: UseCasesModule.register(),
      }),
    ];
    return {
      module: AppModule,
      imports,
    };
  }
}
