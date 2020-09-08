import { TestBed } from '@angular/core/testing';

import { CensuresService } from './censures.service';

describe('CensuresService', () => {
  let service: CensuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CensuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
