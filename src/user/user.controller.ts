import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Post('create')
  async createUser(dto: UserDTO) {
    return this.userService.create(dto)
  }
}
