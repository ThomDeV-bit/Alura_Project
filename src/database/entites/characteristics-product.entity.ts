import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity("product_characteristics")
export class ProductCharacteristicsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "nome", length: 100, nullable: false })
    nome: string;

    @Column({ name: "descricao", length: 100, nullable: false })
    descricao: string;
}