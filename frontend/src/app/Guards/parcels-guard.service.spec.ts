import { TestBed } from '@angular/core/testing';

import { ParcelsGuardService } from './parcels-guard.service';

describe('ParcelsGuardService', () => {
  let service: ParcelsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
