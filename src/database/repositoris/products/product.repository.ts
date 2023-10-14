import { DataSource, In, Repository, TypedEventEmitter } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductRepository, ProductEntity } from "src/database/entites/product.entity";



@Injectable()
export class ProductRepository implements IProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }
    async getAll(): Promise<ProductEntity[]> {
        return await this.productRepository.find()
    }

    async getProductId(param: string) {
        let list: ProductEntity[]
        const product = await this.productRepository.findBy({ id: In(list) })
    }
}

