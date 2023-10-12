import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    PrimaryColumn
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity("product_characteristics")
export class CharacteristicsEntity {

    @PrimaryColumn({name : 'id'})
    id: string

    @Column({ name: "nome", length: 100, nullable: false })
    nome: string;

    @Column({ name: "descricao", length: 100, nullable: false })
    descricao: string;

    @ManyToOne(()=> ProductEntity, (produto)=> produto.characteristics)
    produto : ProductEntity

}