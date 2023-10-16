import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens';
import { UserRepository } from '../../database/repositoris/users/user.repository';
import { UserDto } from '../../domain/users/dto/create-user.dto';
import { v4 } from 'uuid';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUsersService {
    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ) {}

    async createUser(dto: UserDto) {
        try {
            dto.id = v4();

            dto.password = await hash(dto.password, 10);

            const user = await this.userRepository.execute(dto);

            return user;
        } catch (error) {
            throw new UnprocessableEntityException(error, `Impossivel criar usuario`);
        }
    }
}
