import { TestBed } from '@angular/core/testing';

import { MotorvehicleService } from './motorvehicle.service';

describe('MotorvehicleService', () => {
  let service: MotorvehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorvehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
