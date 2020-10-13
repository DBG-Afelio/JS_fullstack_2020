import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { AccessoiresModule } from './accessoires/accessoires.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersLineModule } from './orders-line/orders-line.module';
import * as dotenv from 'dotenv' ;

dotenv.config();

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true 
  }),
  TypeOrmModule.forRoot({
     type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) ,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
  }),
  
  RolesModule,
  
  UsersModule,
  
  ProductsModule,
  
  CategoriesModule,
  
  AccessoiresModule,
  
  OrdersModule,
  
  OrdersLineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
