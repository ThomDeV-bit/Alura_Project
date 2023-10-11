import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../../database/repositoris/tokens';
import { UserRepository } from '../../../database/repositoris/users/user.repository';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class SearchUserService {
    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository,
        @InjectPinoLogger(SearchUserService.name)
        private readonly myLogger: PinoLogger,
    ) {}

    async searchUser() {
        try {
            return await this.userRepository.search();
        } catch (error) {
            throw new UnprocessableEntityException();
        }
    }
}
