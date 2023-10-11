import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'mail', nullable: false, unique: true })
    mail: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @OneToMany(() => OrderEntity, (order) => order.usuario)
    order: OrderEntity[];
}

export interface IUserRepository {
    search(): Promise<IUser[]>;
    execute(param: UserDto): Promise<IUser>;
}
