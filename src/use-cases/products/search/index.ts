import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/database/entites/product.entity';
import { ProductRepository } from 'src/database/repositoris/products/product.repository';
import { TYPEORM_TOKENS } from 'src/database/repositoris/tokens';

@Injectable()
export class ProductUseCase {
    constructor(
            @Inject(TYPEORM_TOKENS.PRODUCT_REPOSITORY)
            private readonly productRepository : ProductRepository
    ){}
        async getAll(): Promise<ProductEntity[]>{
            return await this.productRepository.getAll()
        }
}
