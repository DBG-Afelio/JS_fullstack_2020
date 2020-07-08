/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListItemsService } from './list-items.service';

describe('Service: ListItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListItemsService]
    });
  });

  it('should ...', inject([ListItemsService], (service: ListItemsService) => {
    expect(service).toBeTruthy();
  }));
});
