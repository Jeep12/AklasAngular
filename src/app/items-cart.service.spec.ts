import { TestBed } from '@angular/core/testing';

import { ItemsCartService } from './items-cart.service';

describe('ItemsCartService', () => {
  let service: ItemsCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
