import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/users/dto/create-user.dto';
import { CreateUsersService } from 'src/users/service/users-create.service';
import { SearchUserService } from 'src/users/service/users-search.service';

import { v4 } from 'uuid';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly searchUserService: SearchUserService,
  ) {}

  @Get('search')
  async findAll() {
    return this.searchUserService.searchUser();
  }

  @Post('create')
  async create(@Body() dto: UserDto) {
    const id = v4();
    dto.id = id;
    const user = dto;
    console.log(user);

    return await this.createUsersService.createUser(user);
  }
}
