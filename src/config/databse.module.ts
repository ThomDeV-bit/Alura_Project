import { Injectable, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm/dist";
import { databaseCongiProviders } from "./database.provider";

@Module({
    exports: [...databaseCongiProviders],
    providers : [ ...databaseCongiProviders]
})

export  class DatabaseConfigModule { }

