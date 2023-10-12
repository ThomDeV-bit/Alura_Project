import { type } from "os";
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";


@Entity({name:'categories'})

export class CategorieEntity {

@PrimaryColumn({name: 'id'})
id : string

@Column({name:'categorie'})
categorie : string

@OneToOne(()=> ProductEntity, (produto)=> produto.categoria)
produto : ProductEntity

}