import { StatusPedido } from '../../common/enum/statuspedido.enum';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, Timestamp } from 'typeorm';
import { UserEntity } from './user.entity';
import { ItensByOrderEntity } from './itensByOrder.entity';
import { CreateOrderDto } from 'src/domain/orders/dto/create-order.dto';

@Entity({ name: 'orders' })
export class OrderEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column({ name: 'valor_total', nullable: false })
    valorTotal: number;

    @Column({ name: 'status', type: 'enum', enum: StatusPedido, nullable: false })
    status: string;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

    @ManyToOne(() => UserEntity, (usuario) => usuario.order)
    usuario: UserEntity;

    @OneToMany(() => ItensByOrderEntity, (itens) => itens.order, {
        cascade: true,
    })
    itensByOrder: ItensByOrderEntity[];
}

export interface IOrderRepository {
    create(userId: string, order: CreateOrderDto);
}
