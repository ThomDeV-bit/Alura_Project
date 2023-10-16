import { Injectable, Inject } from "@nestjs/common";
import { ProductEntity } from "src/database/entites/product.entity";
import {  ProductRepository } from "src/database/repositoris/product/product.repository";
import { TYPEORM_TOKENS } from "src/database/repositoris/tokens";

@Injectable()
export class ProductUseCase {
    constructor(
        @Inject(TYPEORM_TOKENS.PRODUCTS_REPO)
        private readonly productRepository: ProductRepository
    ) { }

    async find(param : string) {
        return await this.productRepository.search(param)
    }

    async findProductById(productId : string[]): Promise<ProductEntity[]>{
        return await this.productRepository.findProductById(productId)
    }

}
