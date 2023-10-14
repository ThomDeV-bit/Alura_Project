import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'itens_by_order' })
export class ItensByOrderEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    quantidade: number;

    @Column()
    precoVenda: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @CreateDateColumn()
    updated_at: Timestamp;

    @ManyToOne(() => OrderEntity, (order) => order.itensByOrder, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    order: OrderEntity

    @ManyToOne(() => ProductEntity, (product) => product.productsByOrder)
    products: ProductEntity;
}
