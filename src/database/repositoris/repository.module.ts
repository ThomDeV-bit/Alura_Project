import { OrderRepository } from './orders/order.repository';
import {  ProductRepository } from './product/product.repository';
import { UserRepository } from './users/user.repository';

export class RepositoryModule {
    static register() {
        return {
            userRepository: UserRepository,
            orderRepository: OrderRepository,
            productRepo : ProductRepository
        };
    }
}
