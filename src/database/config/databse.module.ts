import { Injectable, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm/dist";
import { ImageEntity } from "src/database/entites/categories.entity";
import { UserEntity } from "src/database/entites/user.entity";
import { DataSource } from "typeorm";
import { DatabaseConfig } from "./database.provider";



@Module({
    exports: [DatabaseConfig],
    providers : [DatabaseConfig]
    
})

export class DatabaseConfigModule { }

  
