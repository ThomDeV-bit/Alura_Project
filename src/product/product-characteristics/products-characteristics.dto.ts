import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsString, isArray } from "class-validator";

export class CharacteristicsProductsDTO {

@ApiProperty({name : 'nome'})
@Expose({name : 'nomeProduto'})
@IsString()
nome : string

@ApiProperty({name : 'descricao'})
@Expose({name : 'descricaoProduto'})
@IsString()
descricao : string

}