/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { TYPEORM_TOKENS } from 'src/database/repositoris/tokens';
import { UserRepository } from 'src/database/repositoris/users/user.repository';
import { UserDto } from 'src/domain/users/dto/create-user.dto';




@UseInterceptors()
@Injectable()
export class CreateUsersService {
    constructor(
     @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
      private readonly userRepository: UserRepository,
    ) { }

    async createUser(dto: UserDto) {
        console.log('***************************************')
        return await this.userRepository.execute(dto);
    }
}
