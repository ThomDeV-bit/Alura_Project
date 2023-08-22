import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Migration1692653037030 } from "../migration/1692653037030-migration";




@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {

        return ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root123',
            database: 'loja',
            entities: [__dirname + './migration/*.{ts,js}'],
            migrations: [Migration1692653037030],
        })
    }
} 