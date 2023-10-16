import { Inject, Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/database/repositoris/orders/order.repository';
import { TYPEORM_TOKENS } from 'src/database/repositoris/tokens';
import { CreateOrderDto } from 'src/domain/orders/dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(
        @Inject(TYPEORM_TOKENS.ORDER_REPOSITORY)
        private readonly orderRepository: OrderRepository,
    ) {}
    async create(userId: string, order: CreateOrderDto) {
        return await this.orderRepository.create(userId, order);
    }

    async search(userId: string) {
        return await this.orderRepository.getOrderClient(userId);
    }
}
