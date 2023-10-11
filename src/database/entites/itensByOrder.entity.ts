import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'itens_by_order' })
export class ItensByOrderEntity {
    @PrimaryGeneratedColumn('uuid')
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
    order: OrderEntity;

    // @OneToMany(() => ProductEntity, (product) => product.productOrder)
    // products: ProductEntity[];
}
