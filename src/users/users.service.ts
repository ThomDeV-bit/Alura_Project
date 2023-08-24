/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositoris/user.repository';
import { UserDto } from './dto/create-user.dto';



@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) { }

  async find() {
    console.log('***************************************')
    return await this.userRepository.search();
  }

  async call(dto: UserDto) {
    return await this.userRepository.execute(dto)

  }
}
