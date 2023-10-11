import { OrderRepository } from './orders/order.repository';
import { UserRepository } from './users/user.repository';

export class RepositoryModule {
    static register() {
        return {
            userRepository: UserRepository,
            orderRepository: OrderRepository,
        };
    }
}
