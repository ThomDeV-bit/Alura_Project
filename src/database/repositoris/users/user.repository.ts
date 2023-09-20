import { Injectable } from '@nestjs/common';
import { IUserRepoisotry, UserEntity } from '../../entites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';
import { IUserResponse } from 'src/domain/users/dto/user-response.dto';

@Injectable()
export class UserRepository implements IUserRepoisotry {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<IUser>,
  ) {}

  search(): Promise<IUserResponse[]> {
    return this.userRepository.find();
  }

  execute(dto: UserDto): Promise<IUser> {
    const user = this.userRepository.create(dto);
    const save = this.userRepository.save(user);
    return save;
  }
}
