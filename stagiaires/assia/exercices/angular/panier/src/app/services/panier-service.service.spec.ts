import { TestBed } from '@angular/core/testing';

import { PanierServiceService } from './panier-service.service';

describe('PanierServiceService', () => {
  let service: PanierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
