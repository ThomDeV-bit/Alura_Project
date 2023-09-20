import { Injectable } from '@nestjs/common';
import { IUserRepository, UserEntity } from '../../entites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<IUser>,
  ) {}

  search(): Promise<IUser[]> {
    return this.userRepository.find();
  }

  execute(dto: UserDto): Promise<IUser> {
    const user = this.userRepository.create(dto);
    const save = this.userRepository.save(user);
    return save;
  }
}
