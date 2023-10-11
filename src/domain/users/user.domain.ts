import { OrderEntity } from 'src/database/entites/order.entity';

export interface IUser {
    id: string;
    name: string;
    mail: string;
    password: string;
    order: OrderEntity[];
}
