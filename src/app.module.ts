import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from './database/repositoris/typeorm.module';
import { RepositoryModule } from './database/repositoris/repository.module';
import { ApiModule } from './api/api.module';
import { UseCasesModule } from './use-cases/use-cases.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from 'nestjs-pino';
import { pino } from 'pino';
import { pid } from 'process';
import { pinoMock } from './config/logger/logger-config';

@Module({})
export class AppModule {
    static register(): DynamicModule {
        const imports = [
            ScheduleModule.forRoot(),
            LoggerModule.forRoot({
                pinoHttp: {
                    logger: pinoMock,
                    stream: pino.destination('./console_node.log'),
                }
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
