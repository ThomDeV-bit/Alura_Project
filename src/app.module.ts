/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './database/config/database.provider';
import { OrderModule } from './order/order.module';
import { UsersModule } from './users/users.module';




@Module({

  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig,
      inject: [DatabaseConfig]
    }), UsersModule, OrderModule, UsersModule],

  providers: [],
    
  exports: []


})
export class AppModule { }
