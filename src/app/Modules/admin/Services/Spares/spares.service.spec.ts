import { TestBed } from '@angular/core/testing';

import { SparesService } from './spares.service';

describe('SparesService', () => {
  let service: SparesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
