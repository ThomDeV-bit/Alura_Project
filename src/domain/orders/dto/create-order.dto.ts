import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { StatusPedido } from 'src/common/enum/statuspedido.enum';
import { ItensByOrderEntity } from 'src/database/entites/itensByOrder.entity';
import { UserEntity } from 'src/database/entites/user.entity';

export class CreateOrderDto {
    id?: string;

    @ApiProperty({ name: 'valorTotal' })
    @Expose({ name: 'valorTotal' })
    valorTotal: number;

    @ApiProperty({ name: 'status' })
    @Expose({ name: 'status' })
    status: StatusPedido;

    @ApiProperty({ name: 'usuario' })
    @Expose({ name: 'usuario' })
    usuario: UserEntity;

    @ApiProperty({ name: 'itensPorPido' })
    @Expose({ name: 'itensPorPido' })
    itensByOrder: ItensByOrderEntity[];
}
