import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserDTO } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class UserService {


    constructor(
 
    private readonly userRepository: UserRepository) { }

    async create(dto: UserDTO) {
        const user = await this.userRepository.save(this.userRepository.create(dto))
        return user
    }

}
