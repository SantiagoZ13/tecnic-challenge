import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';

@ApiTags('Sales')
@ApiBearerAuth()
@Controller('sales')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva venta' })
  @ApiResponse({ status: 201, description: 'Venta registrada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  async createSale(@Body() createSaleDto: CreateSaleDto, @Req() req: any) {
    const userId = req.user.userId;
    return this.salesService.create({ ...createSaleDto, userId });
  }

  @Roles('admin')
  @CacheKey('sales_stats')
  @CacheTTL(120)
  @Get('stats')
  @ApiOperation({ summary: 'Obtener estadísticas de ventas' })
  @ApiResponse({
    status: 200,
    description: 'Estadísticas de ventas calculadas exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'No hay ventas registradas.' })
  async getSalesStats() {
    return this.salesService.getSalesStats();
  }
}
