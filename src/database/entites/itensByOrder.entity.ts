import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";





@Entity({name: 'itens_by_order'})

export class ItensByOrder {

@PrimaryGeneratedColumn('uuid')
id: string

@Column({type :'uuid'})
pedido : string

@Column({type : 'uuid'})
produto : string

@Column()
quantidade : number

@Column()
precoVenda: number







}