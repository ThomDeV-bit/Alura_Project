import { TypeOrmDataSourceFactory, getDataSourceToken } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";
import { Migration1692653037030 } from "../migration/1692653037030-migration";





const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'loja',
    entities: [__dirname + './entites/*.{ts,js}'],
    migrations : [Migration1692653037030],

    
}


const dataSource = new DataSource(dataSourceOptions)

export default dataSource;