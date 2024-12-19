import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsEnum,
  IsString,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Nombre Apellido',
    description: 'Nombre completo del usuario',
  })
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @MinLength(4, { message: 'El nombre debe tener más de 6 letras' })
  name: string;

  @ApiProperty({
    example: 'nombre.apellido@example.com',
    description: 'Correo electrónico del usuario',
  })
  @IsEmail({}, { message: 'El formato del correo no es válido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Contraseña del usuario (mínimo 8 caracteres)',
  })
  @IsString({ message: 'La contraseña debe ser un string' })
  @IsNotEmpty({ message: 'La contraseña es obligatorio' })
  @MinLength(8, { message: 'La contraseña debe tener más de 8 letras' })
  password: string;

  @ApiProperty({
    example: 'client',
    description: 'Rol del usuario (admin o client)',
  })
  @IsString({ message: 'El rol debe ser un string' })
  @IsNotEmpty({ message: 'El rol es obligatorio' })
  @IsEnum(['admin', 'client'], { message: 'El rol debe ser admin o cliente' })
  role: string;
}
