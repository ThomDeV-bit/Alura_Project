/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/create-user.dto';
import { v4 } from 'uuid'
import { GlobalResponse } from 'src/common/baseResponse/globalResponse';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }



  @Get('find')
  async findAll() {
    return this.usersService.find();
  }


  @Post('create')
   async create(@Body() dto: UserDto) {
   console.log(dto)
    return await this.usersService.call(dto)
  }
}
