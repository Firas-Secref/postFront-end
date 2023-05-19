import { TestBed } from '@angular/core/testing';

import { UtilisatuersService } from './utilisatuers.service';

describe('UtilisatuersService', () => {
  let service: UtilisatuersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisatuersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
