/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { IUserRepoisotry, UserEntity } from '../../entites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SaveOptions } from 'typeorm';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';


@Injectable()
export class UserRepository implements IUserRepoisotry {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<IUser>,
    ) { }


    search(): Promise<IUser[]> {
        return  this.userRepository.find()
    }


    execute(dto: UserDto) {
        const user =  this.userRepository.create(dto)
        return this.userRepository.save(user)
    }
}


