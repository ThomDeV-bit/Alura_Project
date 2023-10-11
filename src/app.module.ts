import { DynamicModule, Module } from '@nestjs/common';
import { TypeormModule } from './database/repositoris/typeorm.module';
import { RepositoryModule } from './database/repositoris/repository.module';
import { ApiModule } from './api/api.module';
import { UseCasesModule } from './use-cases/use-cases.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoMock } from './config/logger/logger-config';

@Module({})
export class AppModule {
    static register(): DynamicModule {
        const imports = [
            LoggerModule.forRoot({
                pinoHttp: pinoMock,
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
