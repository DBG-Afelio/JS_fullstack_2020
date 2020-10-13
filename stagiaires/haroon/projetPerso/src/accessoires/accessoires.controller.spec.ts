import { Test, TestingModule } from '@nestjs/testing';
import { AccessoiresController } from './accessoires.controller';

describe('AccessoiresController', () => {
  let controller: AccessoiresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessoiresController],
    }).compile();

    controller = module.get<AccessoiresController>(AccessoiresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
