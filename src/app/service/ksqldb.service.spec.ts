import { TestBed } from '@angular/core/testing';

import { KsqldbService } from './ksqldb.service';

describe('KsqldbService', () => {
  let service: KsqldbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KsqldbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
