import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  name: string;

  @IsString({ message: 'La descripción debe ser un string' })
  @IsNotEmpty({ message: 'La descripción es obligatorio' })
  description: string;

  @IsNumber({}, { message: 'El precio debe ser un número' })
  price: number;

  @IsString({ message: 'La categoria debe ser un string' })
  @IsNotEmpty({ message: 'La categoria es obligatorio' })
  category: string;

  @IsNumber({}, { message: 'El stock debe ser un número' })
  @IsNotEmpty({ message: 'La cantidad es obligatorio' })
  stock: number;
}
