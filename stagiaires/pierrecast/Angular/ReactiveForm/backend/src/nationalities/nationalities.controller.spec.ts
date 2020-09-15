import { Test, TestingModule } from '@nestjs/testing';
import { NationalitiesController } from './nationalities.controller';

describe('NationalitiesController', () => {
  let controller: NationalitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NationalitiesController],
    }).compile();

    controller = module.get<NationalitiesController>(NationalitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
