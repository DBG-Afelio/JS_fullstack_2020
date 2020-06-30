/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MagasinService } from './magasin.service';

describe('Service: Magasin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagasinService]
    });
  });

  it('should ...', inject([MagasinService], (service: MagasinService) => {
    expect(service).toBeTruthy();
  }));
});
