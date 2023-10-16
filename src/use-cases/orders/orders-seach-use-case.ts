import { Injectable, Inject } from '@nestjs/common';
import { OrderRepository } from 'src/database/repositoris/orders/order.repository';
import { TYPEORM_TOKENS } from 'src/database/repositoris/tokens';

@Injectable()
export class OrderService {
    constructor(
        @Inject(TYPEORM_TOKENS.ORDER_REPOSITORY)
        private readonly orderRepository: OrderRepository,
    ) {}
    async create(userId: string) {
        return await this.orderRepository.getOrderClient(userId);
    }
}
