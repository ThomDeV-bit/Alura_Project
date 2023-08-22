import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product_image")
export class ImageProduct {

    @PrimaryGeneratedColumn('increment')
    id: number


    @Column({ name: "image", nullable: false, type: 'blob' })
    nome: Blob;

}