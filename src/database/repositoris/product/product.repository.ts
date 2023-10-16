import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductRepo, ProductEntity } from "src/database/entites/product.entity";
import { In, Repository } from "typeorm";

@Injectable()
export class ProductRepository implements IProductRepo {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository : Repository<ProductEntity>,
    ){}
    async search(){
        return await this.productRepository.find({relations : {
            characteristics: true
        }})
    }

    async findProductById(productId : string[]): Promise<ProductEntity[]>{
        return await this.productRepository.findBy({id : In(productId)})
    }
}
