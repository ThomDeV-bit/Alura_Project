import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'categories'})

export class ImageEntity {

@PrimaryGeneratedColumn('increment')
id : number

@Column({name:'categorie'})
categorie : string

}