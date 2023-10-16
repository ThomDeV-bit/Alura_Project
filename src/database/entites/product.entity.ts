import { Column, Entity, OneToMany,PrimaryColumn } from 'typeorm';
import { CategorieEntity } from './categories.entity';
import { ItensByOrderEntity } from './itensByOrder.entity';
import { ImageProductEntity } from './image-product.entity';
import { CharacteristicsEntity } from './characteristics-product.entity';

@Entity({ name: 'product' })
export class ProductEntity {
    @PrimaryColumn({name: 'id'})
    id: string;

    @Column({ name: 'nome', length: 100, nullable: false })
    nome: string;

    @Column({ name: 'valor', nullable: false })
    valor: number;

    @Column({ name: 'quantidade', nullable: false })
    quantidade: number;

    @OneToMany(() => (CategorieEntity), (categoria) => categoria.produto)
    categoria: CategorieEntity[]

    @OneToMany(() => ImageProductEntity, (image) => image.imageProduto)
    imageProduto: ImageProductEntity[]

    @OneToMany(() => CharacteristicsEntity, (caracteristicas) => caracteristicas.descricao)
    characteristics: CharacteristicsEntity[]

    @OneToMany(() => ItensByOrderEntity, (order) => order.products)
    productsByOrder: ItensByOrderEntity[];
}
 export interface IProductRepo  {
    search ();
 }
