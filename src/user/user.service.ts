import { Injectable } from '@nestjs/common';
import { UserEntity } from '../database/entites/user.entity';
import { UserDTO } from './dto/user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {



    constructor(private readonly userRepository: UserRepository) {}
    async create(dto: UserDTO) {
        const user = await this.userRepository.save(this.userRepository.create(dto))
        return user
    }
    async find() {
        return this.userRepository.find()

    }
}
