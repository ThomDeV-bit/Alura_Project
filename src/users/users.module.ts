/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SearchUserService } from './service/users-search.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entites/user.entity';
import { OrderEntity } from 'src/database/entites/order.entity';
import { UserRepository } from 'src/repositoris/user.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalSearchResponse } from 'src/common/baseResponse/globlaSearchResponse';
import { CreateUsersService } from './service/users-create.service';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OrderEntity])],

  controllers: [UsersController],

  providers: [
    CreateUsersService, SearchUserService, UserRepository,
    { provide: APP_INTERCEPTOR, useClass: GlobalSearchResponse },
    ]

})
export class UsersModule { }
