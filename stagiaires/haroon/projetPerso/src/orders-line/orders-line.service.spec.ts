import { Test, TestingModule } from '@nestjs/testing';
import { OrdersLineService } from './orders-line.service';

describe('OrdersLineService', () => {
  let service: OrdersLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersLineService],
    }).compile();

    service = module.get<OrdersLineService>(OrdersLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
