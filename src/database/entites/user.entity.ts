import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity({name : 'users'})

export class UserEntity {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    mail: string

    @Column()
    password: string

    @Column()
    created_at : Timestamp
    
}