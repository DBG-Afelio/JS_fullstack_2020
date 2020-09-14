import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsController } from './produits.controller';

describe('ProduitsController', () => {
  let controller: ProduitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsController],
    }).compile();

    controller = module.get<ProduitsController>(ProduitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
