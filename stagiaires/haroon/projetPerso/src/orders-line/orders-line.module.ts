import { Module } from '@nestjs/common';
import { OrdersLineController } from './orders-line.controller';
import { OrdersLineService } from './orders-line.service';

@Module({
  controllers: [OrdersLineController],
  providers: [OrdersLineService]
})
export class OrdersLineModule {}
