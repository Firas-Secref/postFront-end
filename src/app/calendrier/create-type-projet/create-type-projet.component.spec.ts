import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeProjetComponent } from './create-type-projet.component';

describe('CreateTypeProjetComponent', () => {
  let component: CreateTypeProjetComponent;
  let fixture: ComponentFixture<CreateTypeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
