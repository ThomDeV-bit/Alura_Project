import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { UserEntity } from './database/entites/user.entity';
import { DatabaseConfigModule } from './database/config/databse.module';
import { DatabaseConfig } from './database/config/database.provider';



@Module({

  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig,
      inject: [DatabaseConfig]
    }), UserModule],

  providers: [],
  exports: []


})
export class AppModule { }
