import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('registrar')
  createUser(@Body() userDto: any) {
    return this.usersService.create(userDto);
  }
}
