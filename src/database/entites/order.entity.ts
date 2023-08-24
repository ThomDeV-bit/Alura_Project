import { StatusPedido } from "../../common/enum/statuspedido.enum"
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { UserEntity } from "./user.entity";






@Entity({name :'orders'})

export class OrderEntity{

    @PrimaryColumn('uuid')
    id: string

    @Column({name : 'valor_total', nullable : false})
    valorTotal: number

    @Column({name : 'status', type : 'enum',enum: StatusPedido, nullable : false})
    status : string  
   
    @CreateDateColumn()
    created_at : Timestamp
    
    @CreateDateColumn()
    updated_at: Timestamp

    @ManyToOne(()=> UserEntity, (usuario)=> usuario.pedidos)
    usuario : UserEntity
}
