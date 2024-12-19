import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Sale, SaleDocument } from './schemas/sale.schema';
import { Product, ProductDocument } from '../products/schemas/product.schema';

@Injectable()
export class SalesService {
  constructor(
    @InjectModel(Sale.name) private saleModel: Model<SaleDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(saleData: any) {
    if (!isValidObjectId(saleData.productId)) {
      throw new BadRequestException('Invalid product ID');
    }
    const product = await this.productModel.findById(saleData.productId).exec();
    if (!product) {
      throw new NotFoundException('Producto no encontrado.');
    }

    const totalPrice = product.price * saleData.quantity;

    const sale = new this.saleModel({
      ...saleData,
      totalPrice,
      date: new Date(),
    });
    await sale.save();
    product.stock -= saleData.quantity;
    await product.save();
    return sale;
  }

  async getSalesStats() {
    return this.saleModel.aggregate([
      {
        $group: {
          _id: '$productId',
          totalSales: { $sum: '$totalPrice' },
          totalQuantity: { $sum: '$quantity' },
        },
      },
      {
        $project: {
          productId: '$_id',
          totalSales: 1,
          totalQuantity: 1,
          _id: 0,
        },
      },
    ]);
  }
}
