import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_image')
export class ImageProduct {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'image', nullable: false, type: 'blob' })
    nome: Blob;
}
