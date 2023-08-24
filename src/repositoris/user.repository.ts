/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IUserRepoisotry, UserEntity } from 'src/database/entites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SaveOptions } from 'typeorm';
import { UserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UserRepository implements IUserRepoisotry {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }
    search(): Promise<UserEntity[]> {
        return  this.userRepository.find()
    }
    execute(dto: UserDto) {
        const user =  this.userRepository.create(dto)
        return this.userRepository.save(user)
    }
}
