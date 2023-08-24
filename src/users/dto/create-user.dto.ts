/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UserDto {

    @IsOptional()
    @IsUUID()
    id?: string


    @ApiProperty({ name: 'nome do usuario' })
    @Expose({ name: 'nome' })
    @IsString()
    name: string;

    @ApiProperty({ name: 'email do usuario' })
    @Expose({ name: 'email' })
    @IsEmail()
    mail: string;

    @ApiProperty({ name: 'senha do usuario' })
    @Expose({ name: 'senha' })
    @IsString()
    password: string;
}
