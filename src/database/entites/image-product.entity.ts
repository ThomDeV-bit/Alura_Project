import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { Blob } from 'buffer';

@Entity('product_image')
export class ImageProductEntity {
    @PrimaryColumn({name:'id'})
    id: string;

    @Column({ name: 'image', nullable: false, type: 'blob' })
    image: Blob;

    @ManyToOne(()=> ProductEntity, (produto) => produto.imageProduto)
    imageProduto : ProductEntity;
}
