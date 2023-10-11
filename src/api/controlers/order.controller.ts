import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateOrderDto } from 'src/domain/orders/dto/create-order.dto';
import { OrderService } from 'src/use-cases/orders/create';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post('create/:id')
    create(@Param('id') userId: string, @Body() order: CreateOrderDto) {
        return this.orderService.create(userId, order);
    }

    @Get('search/:id')
    findAll(@Param('id') userId: string) {
        return this.orderService.search(userId);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.orderService.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    //     return this.orderService.update(+id, updateOrderDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.orderService.remove(+id);
    // }
}
