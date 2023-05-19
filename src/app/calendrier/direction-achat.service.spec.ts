import { TestBed } from '@angular/core/testing';

import { DirectionAchatService } from './direction-achat.service';

describe('DirectionAchatService', () => {
  let service: DirectionAchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionAchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
