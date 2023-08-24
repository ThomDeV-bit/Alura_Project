/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entites/user.entity';
import { OrderEntity } from 'src/database/entites/order.entity';
import { UserRepository } from 'src/repositoris/user.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalResponse } from 'src/common/baseResponse/globalResponse';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OrderEntity])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository ,{provide : APP_INTERCEPTOR, useClass : GlobalResponse}],
})
export class UsersModule { }
