/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens'
import { UserRepository } from '../../database/repositoris/users/user.repository';




@UseInterceptors()
@Injectable()
export class SearchUserService {
  constructor(
    @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
     private readonly userRepository: UserRepository,
  ) { }

  async searchUser(){
    console.log('***************************************')
    return await this.userRepository.search();
  }

}
  