import { TestBed } from '@angular/core/testing';

import { CentralisedDataService } from './centralised-data.service';

describe('CentralisedDataService', () => {
  let service: CentralisedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralisedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
