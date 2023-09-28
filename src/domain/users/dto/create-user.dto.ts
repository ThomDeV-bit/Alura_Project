/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UserDto {

    @IsOptional()
    @IsUUID()
    id?: string


    @ApiProperty({ name: 'nome' })
    @Expose({ name: 'nome' })
    @IsString()
    name: string;

    @ApiProperty({ name: 'email'})
    @Expose({ name: 'email' })
    @IsEmail()
    mail: string;

    @ApiProperty({ name: 'senha' })
    @Expose({ name: 'senha' })
    @IsString()
    password: string;
}
