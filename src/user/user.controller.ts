import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


@Post('create')
  async createUser(@Body() dto: UserDTO) {
    return this.userService.create(dto)
  }

@Get('find')
 async find(){
 return this.userService.find()
 }
 
 }
