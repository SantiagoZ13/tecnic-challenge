import { Schema } from 'mongoose';

export const PurchaseSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  Products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export interface Purchase extends Document {
  clientId: string;
  products: Array<{
    productId: string;
    quantity: number;
  }>;
  totalAmount: number;
  date: Date;
}
