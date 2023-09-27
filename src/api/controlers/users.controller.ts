import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';
import { CreateUsersService } from 'src/use-cases/users/users-create.use-case';
import { SearchUserService } from 'src/use-cases/users/users-search.use-case';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly searchUserService: SearchUserService,
  ) {}

  @Get('search')
  async findAll(): Promise<IUser[]> {
    return this.searchUserService.searchUser();
  }

  @Post('create')
  async create(@Body() dto: UserDto): Promise<IUser> {
    return await this.createUsersService.createUser(dto);
  }
}
