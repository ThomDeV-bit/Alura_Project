import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id: string
    @Column()
    name: string
    @Column()
    mail: string
    @Column()
    senha: string

}