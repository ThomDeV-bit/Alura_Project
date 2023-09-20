import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens';
import { UserRepository } from '../../database/repositoris/users/user.repository';
import { UserDto } from '../../domain/users/dto/create-user.dto';
import { v4 } from 'uuid';
import { hash } from 'bcrypt';

@UseInterceptors()
@Injectable()
export class CreateUsersService {
  constructor(
    @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(dto: UserDto) {
    dto.id = v4();
    dto.password = await hash(dto.password, 10);
    const user = await this.userRepository.execute(dto);
    console.log(
      '>>>>>>>>>>>>>>>>>>>>>>>>>>>CRIAR USUARIO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<',
    );

    return user;
  }
}
