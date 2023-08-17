import { DataSource, Repository, TypedEventEmitter } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { Injectable } from "@nestjs/common";



@Injectable()
export class UserRepository extends Repository <UserEntity>{
    constructor(public  dataSource : DataSource){
        super(UserEntity, dataSource.createEntityManager());
}
}
