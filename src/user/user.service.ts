import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>)



    async create(dto: UserDTO){
    const user = await this.userRepository.save(this.userRepository.create(dto))
    return user
    }

}
