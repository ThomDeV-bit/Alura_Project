import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class CategoriesDTO {


    @ApiProperty({ name: "categoria do produto" })
    @Expose({ name: "categoriaProduto" })
    categoria: string

}
 