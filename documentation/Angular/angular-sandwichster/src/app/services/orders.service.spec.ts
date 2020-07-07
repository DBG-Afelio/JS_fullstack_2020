/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdersService } from './orders.service';

describe('Service: Orders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService]
    });
  });

  it('should ...', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));
});
