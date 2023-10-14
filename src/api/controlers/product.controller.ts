import { Controller, Get } from '@nestjs/common';
import { ProductEntity } from 'src/database/entites/product.entity';
import { ProductUseCase } from 'src/use-cases/products/search';

@Controller('product')
export class ProductController {
  constructor(private readonly productUseCase: ProductUseCase) {}
  
  @Get('search')
  async get(): Promise<ProductEntity[]>{
    return await this.productUseCase.getAll()
  }
}
