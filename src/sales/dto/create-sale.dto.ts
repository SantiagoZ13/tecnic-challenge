import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiProperty({
    example: '64e3b1b...',
    description: 'ID del producto que se desea comprar',
  })
  @IsString({ message: 'El id debe ser un string' })
  @IsNotEmpty({ message: 'El id no puede estar vacio' })
  productId: string;

  @ApiProperty({ example: 3, description: 'Cantidad de unidades a comprar' })
  @IsNumber()
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity: number;
}
