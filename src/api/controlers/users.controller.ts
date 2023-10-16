import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/database/entites/user.entity';
import { UserDto } from 'src/domain/users/dto/create-user.dto';
import { IUser } from 'src/domain/users/user.domain';
import { CreateUsersService } from 'src/use-cases/users/users-create-use-case';
import { SearchUserService } from 'src/use-cases/users/users-search-use-case';

@Controller('users')
@ApiTags('users')
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
    async create(@Body() dto: UserDto): Promise<UserEntity> {
        return await this.createUsersService.createUser(dto);
    }
}
