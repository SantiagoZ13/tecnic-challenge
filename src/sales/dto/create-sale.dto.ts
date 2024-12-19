import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateSaleDto {
  @IsString({ message: 'El id debe ser un string' })
  @IsNotEmpty({ message: 'El id no puede estar vacio' })
  productId: string;

  @IsNumber()
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity: number;
}
