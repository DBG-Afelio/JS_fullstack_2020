import { Test, TestingModule } from '@nestjs/testing';
import { NationalitiesService } from './nationalities.service';

describe('NationalitiesService', () => {
  let service: NationalitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NationalitiesService],
    }).compile();

    service = module.get<NationalitiesService>(NationalitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
