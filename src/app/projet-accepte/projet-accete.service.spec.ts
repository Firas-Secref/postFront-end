import { TestBed } from '@angular/core/testing';

import { ProjetAcceteService } from './projet-accete.service';

describe('ProjetAcceteService', () => {
  let service: ProjetAcceteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetAcceteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
