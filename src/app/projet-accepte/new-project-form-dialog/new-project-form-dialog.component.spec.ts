import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectFormDialogComponent } from './new-project-form-dialog.component';

describe('NewProjectFormDialogComponent', () => {
  let component: NewProjectFormDialogComponent;
  let fixture: ComponentFixture<NewProjectFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProjectFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
