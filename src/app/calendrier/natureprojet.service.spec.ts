import { TestBed } from '@angular/core/testing';

import { NatureprojetService } from './natureprojet.service';

describe('NatureprojetService', () => {
  let service: NatureprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
