import { TestBed } from '@angular/core/testing';

import { TrucksDataService } from './trucks-data.service';

describe('TrucksDataService', () => {
  let service: TrucksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrucksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
