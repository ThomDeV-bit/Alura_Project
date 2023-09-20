import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUserResponse } from 'src/domain/users/dto/user-response.dto';
import { CreateUsersService } from 'src/use-cases/users/users-create.use-case';
import { SearchUserService } from 'src/use-cases/users/users-search.use-case';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly searchUserService: SearchUserService,
  ) {}

  @Get('search')
  async findAll(): Promise<IUserResponse[]> {
    return this.searchUserService.searchUser();
  }

  @Post('create')
  async create(@Body() dto: UserDto) {
    return await this.createUsersService.createUser(dto);
  }
}
