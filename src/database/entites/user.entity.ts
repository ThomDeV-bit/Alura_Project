import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @CreateDateColumn()
  updated_at: Timestamp;

  @OneToMany(() => OrderEntity, (pedido) => pedido.usuario)
  pedidos: OrderEntity[];
}

export interface IUserRepoisotry {
  search(): Promise<UserEntity[]>;
}
