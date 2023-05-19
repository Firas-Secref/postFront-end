import { TestBed } from '@angular/core/testing';

import { TypeAchatService } from './type-achat.service';

describe('TypeAchatService', () => {
  let service: TypeAchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeAchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
