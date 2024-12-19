import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('sales')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async createSale(@Body() createSaleDto: CreateSaleDto, @Req() req: any) {
    const userId = req.user.userId;
    return this.salesService.create({ ...createSaleDto, userId });
  }

  @Roles('admin')
  @Get('stats')
  async getSalesStats() {
    return this.salesService.getSalesStats();
  }
}
