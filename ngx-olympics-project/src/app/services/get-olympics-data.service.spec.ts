import { TestBed } from '@angular/core/testing';

import { GetOlympicsDataService } from './get-olympics-data.service';

describe('GetOlympicsDataService', () => {
  let service: GetOlympicsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOlympicsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
