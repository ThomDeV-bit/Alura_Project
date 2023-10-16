import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategorieEntity } from "src/database/entites/categories.entity";
import { IProductRepo, ProductEntity } from "src/database/entites/product.entity";
import { In, Repository } from "typeorm";

@Injectable()
export class ProductRepository implements IProductRepo {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository : Repository<ProductEntity>,
    ){}
    async search(productId: string) {
        const query = await this.productRepository.createQueryBuilder()
        .select()
        .leftJoinAndSelect('categories','categorie', "categorie.produtoId = :product.id",{product : productId},)
        .leftJoinAndSelect('product_image','image', "image.imageProdutoId = :product",{product : productId},)
        .getRawMany()

        return query
        }


    async findProductById(productId : string[]): Promise<ProductEntity[]>{
        return await this.productRepository.find({
            where : {
                id : In(productId)
            },
            relations : {
                categoria : true,
                imageProduto : true
            }
        })
    }
}
