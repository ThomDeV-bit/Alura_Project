/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CreateUsersService } from '../users/service/users-create.service';
import { UserDto } from './dto/create-user.dto';
import { v4 } from 'uuid'
import { SearchUserService } from './service/users-search.service';




@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly searchUserService: SearchUserService) { }



  @Get('search')
  async findAll() {
    return this.searchUserService.searchUser();
  }


  @Post('create')
   async create(@Body() dto: UserDto) {
   console.log(dto)
    return await this.createUsersService.createUser(dto)
  }
}
