import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop', description: 'Nombre del producto' })
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  name: string;

  @ApiProperty({
    example: 'Laptop de alta gama',
    description: 'Descripción del producto',
  })
  @IsString({ message: 'La descripción debe ser un string' })
  @IsNotEmpty({ message: 'La descripción es obligatorio' })
  description: string;

  @ApiProperty({
    example: 150000,
    description: 'Precio del producto en dólares',
  })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  price: number;

  @ApiProperty({
    example: 'Electronics',
    description: 'Categoría del producto',
  })
  @IsString({ message: 'La categoria debe ser un string' })
  @IsNotEmpty({ message: 'La categoria es obligatorio' })
  category: string;

  @ApiProperty({ example: 5, description: 'Cantidad en stock' })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @IsNotEmpty({ message: 'La cantidad es obligatorio' })
  stock: number;
}
