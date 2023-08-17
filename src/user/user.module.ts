import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from 'src/app.module';
import { databaseCongiProviders } from 'src/config/database.provider';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
