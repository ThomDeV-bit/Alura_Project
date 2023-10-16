import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { pinoMock } from "src/config/logger/logger-config";
import { ProductUseCase } from "src/use-cases/product/product-search-use-case";

@Controller('product')
@ApiTags('product')

export class ProductController {
    constructor(private readonly productUseCase: ProductUseCase) { }

    @Get('find')
    async find() {
        pinoMock.logger.info(ProductController.name)
        return await this.productUseCase.find()
    }
}
