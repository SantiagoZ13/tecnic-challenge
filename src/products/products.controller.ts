import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Roles('admin')
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({
    status: 201,
    description: 'El producto ha sido creado exitosamente.',
  })
  @ApiResponse({ status: 409, description: 'El producto ya existe.' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener la lista de productos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos obtenida exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'No hay productos registrados.' })
  findAll() {
    return this.productsService.findAll();
  }
}
