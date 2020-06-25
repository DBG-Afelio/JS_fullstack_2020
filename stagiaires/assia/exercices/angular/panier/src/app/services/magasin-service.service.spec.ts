import { TestBed } from '@angular/core/testing';

import { MagasinServiceService } from './magasin-service.service';

describe('MagasinServiceService', () => {
  let service: MagasinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagasinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
