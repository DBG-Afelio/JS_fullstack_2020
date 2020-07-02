import { TestBed } from '@angular/core/testing';

import { MagasinService } from './magasin.service';

describe('MagasinService', () => {
  let service: MagasinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagasinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
