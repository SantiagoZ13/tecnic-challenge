import {
  IsEmail,
  IsNotEmpty,
  IsEnum,
  IsString,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @MinLength(6, { message: 'El nombre debe tener más de 6 letras' })
  name: string;

  @IsEmail({}, { message: 'El nombre de usuario es obligatorio' })
  @IsNotEmpty({ message: 'El formato del correo no es válido' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un string' })
  @IsNotEmpty({ message: 'La contraseña es obligatorio' })
  @MinLength(8, { message: 'La contraseña debe tener más de 8 letras' })
  password: string;

  @IsString({ message: 'El rol debe ser un string' })
  @IsNotEmpty({ message: 'El rol es obligatorio' })
  @IsEnum(['admin', 'client'], { message: 'El rol debe ser admin o cliente' })
  role: string;
}
