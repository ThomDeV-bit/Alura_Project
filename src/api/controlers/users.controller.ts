import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { CreateUsersService } from 'src/use-cases/users/users-create.use-case';
import { SearchUserService } from 'src/use-cases/users/users-search.use-case';
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
