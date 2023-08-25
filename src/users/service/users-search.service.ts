/* eslint-disable prettier/prettier */
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import {  } from 'src/common/baseResponse/globlaSearchResponse';
import { UserRepository } from 'src/repositoris/user.repository';



@UseInterceptors()
@Injectable()
export class SearchUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) { }

  async searchUser() {
    console.log('***************************************')
    return await this.userRepository.search();
  }

}
  