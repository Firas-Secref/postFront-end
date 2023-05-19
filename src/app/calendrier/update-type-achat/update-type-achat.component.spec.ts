import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeAchatComponent } from './update-type-achat.component';

describe('UpdateTypeAchatComponent', () => {
  let component: UpdateTypeAchatComponent;
  let fixture: ComponentFixture<UpdateTypeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
