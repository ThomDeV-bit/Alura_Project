import { ItensByOrderEntity } from 'src/database/entites/itensByOrder.entity';
import { CreateOrderDto } from './create-order.dto';
import { UserEntity } from 'src/database/entites/user.entity';
import { StatusPedido } from 'src/common/enum/statuspedido.enum';

export class Order implements CreateOrderDto {
    constructor(newOrder: CreateOrderDto) {
        this.id = newOrder.id;
        this.valorTotal = newOrder.valorTotal;
        this.status = newOrder.status;
        this.usuario = newOrder.usuario;
        this.itensByOrder = newOrder.itensByOrder;
    }
    id: string;
    valorTotal: number;
    status: StatusPedido;
    usuario: UserEntity;
    itensByOrder: ItensByOrderEntity[];
}
