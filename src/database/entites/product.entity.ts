import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategorieEntity } from './categories.entity';
import { ItensByOrderEntity } from './itensByOrder.entity';
import { ImageProductEntity } from './image-product.entity';
import { CharacteristicsEntity } from './characteristics-product.entity';

@Entity({ name: 'product' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'usuario_id', length: 100, nullable: false })
    usuarioId: string;

    @Column({ name: 'nome', length: 100, nullable: false })
    nome: string;

    @Column({ name: 'valor', nullable: false })
    valor: number;

    @Column({ name: 'quantidade', nullable: false })
    quantidade: number;

    @OneToOne(() => (CategorieEntity), (categoria) => categoria.produto)
    categoria: CategorieEntity

    @OneToMany(() => ImageProductEntity, (image) => image.imageProduto)
    imageProduto: ImageProductEntity[]

    @OneToMany(() => CharacteristicsEntity, (caracteristicas) => caracteristicas.descricao)
    characteristics: CharacteristicsEntity[]

    @ManyToOne(() => ItensByOrderEntity, (order) => order.products)
    productsByOrder: ItensByOrderEntity;
}
