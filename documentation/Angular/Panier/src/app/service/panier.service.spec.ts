/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PanierService } from './panier.service';

describe('Service: Panier', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanierService]
    });
  });

  it('should ...', inject([PanierService], (service: PanierService) => {
    expect(service).toBeTruthy();
  }));
});
