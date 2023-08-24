import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsString, IsInt, Min, IsPositive } from "class-validator";
import { CharacteristicsProductsDTO } from '../product-characteristics/products-characteristics.dto'
import { ImageProdutoDTO } from "../product-image/product-image.dto"



export class CriaProdutoDTO {

    @ApiProperty({ name: "nome do Produto" })
    @Expose({ name: "nomeProduto" })
    @IsNotEmpty()
    @IsString()
    nome: string;


    @ApiProperty({ name: "valor do Produto" })
    @Expose({ name: "valorProduto" })
    @IsInt()
    @IsPositive()
    valor: number;



    @ApiProperty({ name: "quantidade do Produto" })
    @Expose({ name: "quantidadeProduto" })
    @IsInt()
    @Min(1)
    quantidade: number;



    @ApiProperty({ name: "caracteristicas do Produto" })
    @Expose({ name: "caracteristicasProduto" })
    @Type((x) => CharacteristicsProductsDTO)
    caracteristicas: CharacteristicsProductsDTO[];


    @ApiProperty({ name: "Imagem do Produto" })
    @Expose({ name: "ImagemProduto" })
    @Type((x) => ImageProdutoDTO)
    imagens: ImageProdutoDTO[];


    @ApiProperty({ name: "categoria do Produto" })
    @Expose({ name: "categoriaProduto" })
    categoria: string;


}