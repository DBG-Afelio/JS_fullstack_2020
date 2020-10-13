import { Test, TestingModule } from '@nestjs/testing';
import { AccessoiresService } from './accessoires.service';

describe('AccessoiresService', () => {
  let service: AccessoiresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessoiresService],
    }).compile();

    service = module.get<AccessoiresService>(AccessoiresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
