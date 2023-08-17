import { ApiProperty} from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength,  } from "class-validator";



export class UserDTO {
    @ApiProperty({ name: "user"})
    @IsString()
    name: string


    @ApiProperty({ name: "mail", nullable: false })
    @IsEmail()
    mail: string


    @ApiProperty({ name: 'password', nullable: false })
    @MinLength(8)
    password: string
}