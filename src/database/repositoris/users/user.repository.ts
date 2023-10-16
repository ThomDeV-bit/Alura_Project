import { Injectable } from '@nestjs/common';
import { IUserRepository, UserEntity } from '../../entites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';
import { TYPEORM_TOKENS } from '../tokens';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,

    ) {}

    async search(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async execute(dto: UserDto): Promise<UserEntity> {
        const user = this.userRepository.create(dto);
        const save = await this.userRepository.save(user);
        return save;
    }

    async searchBy(userId: string): Promise<UserEntity> {
        return await this.userRepository.findOneBy({
            id: userId,
        });
    }
}
