/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens';
import { UserRepository } from '../../database/repositoris/users/user.repository';
import { UserDto } from '../../domain/users/dto/create-user.dto';




@UseInterceptors()
@Injectable()
export class CreateUsersService {
    constructor(
     @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
      private readonly userRepository: UserRepository,
    ) { }

    async createUser(dto: UserDto) {
        console.log(dto,'***************************************')
        return await this.userRepository.execute(dto);
    }
}
