import { Schema, Document } from 'mongoose';

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
});
export interface Product extends Document {
  name: string;
  price: number;
  category: string;
  stock: number;
}
