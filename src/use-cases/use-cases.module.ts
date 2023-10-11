import { DynamicModule } from '@nestjs/common';
import { USERS_USE_CASES } from './users';
import { ORDER_USE_CASE } from './orders';

export class UseCasesModule {
    static register(): DynamicModule {
        return {
            module: UseCasesModule,
            global: true,
            exports: [...USERS_USE_CASES, ...ORDER_USE_CASE],
            providers: [...USERS_USE_CASES, ...ORDER_USE_CASE],
        };
    }
}
