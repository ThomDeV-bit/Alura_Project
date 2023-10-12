import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IOrderRepository, OrderEntity } from 'src/database/entites/order.entity';
import { CreateOrderDto } from 'src/domain/orders/dto/create-order.dto';
import { TYPEORM_TOKENS } from '../tokens';
import { UserRepository } from '../users/user.repository';
import { Order } from 'src/domain/orders/dto/order-instance';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusPedido } from 'src/common/enum/statuspedido.enum';
import { v4 } from 'uuid';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { ItensByOrderEntity } from 'src/database/entites/itensByOrder.entity';

@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository,
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
    ) {}
    async create(userId: string, order: CreateOrderDto): Promise<Order> {
        const user = await this.userRepository.searchBy(userId);
        if (user) {
            const orders = new Order(order);
            orders.id = v4();
            orders.status = order.status;
            orders.usuario = user;

            const itensPedido = orders.itensByOrder.map((item) => {
                const itemPedidoEntity = new ItensByOrderEntity();
                itemPedidoEntity.precoVenda = item.precoVenda;
                itemPedidoEntity.quantidade = item.quantidade;
                return itemPedidoEntity;
            });
            const total = itensPedido.reduce((total, item) => {
                return total + item.precoVenda * item.quantidade;
            }, 0);

            orders.itensByOrder = itensPedido;
            orders.valorTotal = total;

            const createOrder = await this.orderRepository.save(orders);
            return createOrder;
        } else {
            throw new BadRequestException('erro');
        }
    }

    async getOrderClient(userId: string) {
        return await this.orderRepository.find({
            where: {
                usuario: {
                    id: userId,
                },
            },
            relations: {
                usuario: true,
            },
        });
    }
}
