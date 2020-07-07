import { TestBed } from '@angular/core/testing';

import { OrdersListService } from './orders-list.service';

describe('OrdersListService', () => {
  let service: OrdersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
