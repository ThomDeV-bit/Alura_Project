import {
  Inject,
  Injectable,
  UseInterceptors,
  UnprocessableEntityException,
} from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens';
import { UserRepository } from '../../database/repositoris/users/user.repository';
import { UserDto } from '../../domain/users/dto/create-user.dto';
import { v4 } from 'uuid';
import { hash } from 'bcrypt';
import { pinoMock } from 'src/config/logger/logger-config';

@Injectable()
export class CreateUsersService {
  constructor(
    @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(dto: UserDto) {
    try {
      pinoMock.info(CreateUsersService.name);

      dto.id = v4();

      dto.password = await hash(dto.password, 10);

      const user = await this.userRepository.execute(dto);

      return user;
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error, 'Impossivel criar usuario');
    }
  }
}
