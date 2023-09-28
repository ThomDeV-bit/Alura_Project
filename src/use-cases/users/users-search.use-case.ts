/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors, UnprocessableEntityException } from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens'
import { UserRepository } from '../../database/repositoris/users/user.repository';
import { pinoMock } from 'src/config/logger/logger-config';




@Injectable()
export class SearchUserService {
  constructor(
    @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) { }

  async searchUser() {
    try {
      pinoMock.info('SHOW ALL USERS')
      return await this.userRepository.search();

    } catch (error) {
      pinoMock.error(this.searchUser.name)
      throw new UnprocessableEntityException()
    }

  }
}
