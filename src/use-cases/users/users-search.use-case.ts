/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import {  } from 'src/common/baseResponse/globalResponse';
import { TYPEORM_TOKENS } from 'src/database/repositoris/tokens';
import { UserRepository } from 'src/database/repositoris/users/user.repository';



@UseInterceptors()
@Injectable()
export class SearchUserService {
  constructor(
    @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
     private readonly userRepository: UserRepository,
  ) { }

  async searchUser() {
    console.log('***************************************')
    return await this.userRepository.search();
  }

}
  