import { Test, TestingModule } from '@nestjs/testing';
import { OrdersLineController } from './orders-line.controller';

describe('OrdersLineController', () => {
  let controller: OrdersLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersLineController],
    }).compile();

    controller = module.get<OrdersLineController>(OrdersLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
