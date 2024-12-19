import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { CacheModule } from '@nestjs/cache-manager';
import configuration from './config/configuration';

@Module({
  imports: [
    CacheModule.register({
      ttl: 240,
      max: 100,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    UsersModule,
    AuthModule,
    ProductsModule,
    SalesModule,
  ],
})
export class AppModule {}
