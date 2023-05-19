import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeProjetComponent } from './update-type-projet.component';

describe('UpdateTypeProjetComponent', () => {
  let component: UpdateTypeProjetComponent;
  let fixture: ComponentFixture<UpdateTypeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
