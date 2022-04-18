import { TestBed } from '@angular/core/testing';

import { TsensorService } from './tsensor.service';

describe('TsensorService', () => {
  let service: TsensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
