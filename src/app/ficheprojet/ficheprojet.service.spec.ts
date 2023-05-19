import { TestBed } from '@angular/core/testing';

import { FicheprojetService } from './ficheprojet.service';

describe('FicheprojetService', () => {
  let service: FicheprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
