import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItensByOrderEntity } from "src/database/entites/itensByOrder.entity";
import { CriaProdutoDTO } from "src/domain/products/dto/product.dto";
import { Repository } from "typeorm";

@Injectable()


export class ItemByOrderReposioty {
    constructor(
        @InjectRepository(ItensByOrderEntity)
        private readonly itemByOrderRepository : Repository<ItensByOrderEntity>
    ){}

    async Create(products : CriaProdutoDTO){
    }
}