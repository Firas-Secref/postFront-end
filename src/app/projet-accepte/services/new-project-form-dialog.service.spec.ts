import { TestBed } from '@angular/core/testing';

import { NewProjectFormDialogService } from './new-project-form-dialog.service';

describe('NewProjectFormDialogService', () => {
  let service: NewProjectFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProjectFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
