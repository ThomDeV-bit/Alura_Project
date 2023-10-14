import { DynamicModule } from '@nestjs/common';
import { ConfigurableModuleClass, OPTIONS_TYPE } from './api.module-definition';
import { UsersController } from './controlers/users.controller';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalResponse } from 'src/common/baseResponse/global-response';
import { GlobalExceptionResponse } from 'src/common/baseResponse/global-excpetion-response';
import { OrderController } from './controlers/order.controller';
import { ProductController } from './controlers/product.controller';

export class ApiModule extends ConfigurableModuleClass {
    static register(options: typeof OPTIONS_TYPE): DynamicModule {
        return {
            module: ApiModule,
            controllers: [UsersController, OrderController,ProductController],
            global: true,
            imports: [options.useCasesModule],
            providers: [
                {
                    provide: APP_INTERCEPTOR,
                    useClass: GlobalResponse,
                },
                {
                    provide: APP_FILTER,
                    useClass: GlobalExceptionResponse,
                },
            ],
        };
    }
}
