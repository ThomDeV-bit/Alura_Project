/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { UserRepository } from 'src/repositoris/user.repository';
import { UserDto } from '../dto/create-user.dto';




@UseInterceptors()
@Injectable()
export class CreateUsersService {
    constructor(
        @Inject(UserRepository) private readonly userRepository: UserRepository,
    ) { }

    async createUser(dto: UserDto) {
        console.log('***************************************')
        return await this.userRepository.execute(dto);
    }
}
