import { ApiProperty } from "@nestjs/swagger";
import { Blob } from "buffer";
import { Expose } from "class-transformer";



export class ImageProdutoDTO {
    
    @ApiProperty({ name: "imagem do produto" })
    @Expose({ name: "imagemProduto" })
    image: Blob[];

} 