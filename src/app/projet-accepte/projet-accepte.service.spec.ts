import { TestBed } from '@angular/core/testing';

import { ProjetAccepteService } from './projet-accepte.service';

describe('ProjetAccepteService', () => {
  let service: ProjetAccepteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetAccepteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
