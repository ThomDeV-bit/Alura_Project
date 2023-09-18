import { Controller, Get, Post, Body } from '@nestjs/common';
<<<<<<< HEAD
import { UserDto } from 'src/users/dto/create-user.dto';
import { CreateUsersService } from 'src/users/service/users-create.service';
import { SearchUserService } from 'src/users/service/users-search.service';

=======
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { CreateUsersService } from 'src/use-cases/users/users-create.use-case';
import { SearchUserService } from 'src/use-cases/users/users-search.use-case';
>>>>>>> 3d7491caedc868f407ec11ffdbdbd1603baba1a5
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
