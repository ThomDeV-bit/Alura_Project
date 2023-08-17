import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule } from './config/databse.module'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { UserRepository } from './user/repository/user.repository';


@Module({
  imports: [DatabaseConfigModule],
  controllers: [],
  providers:[DatabaseConfigModule],
  exports : []
  
})
export class AppModule { }
