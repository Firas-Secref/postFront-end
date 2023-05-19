import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDirectionAchatComponent } from './update-direction-achat.component';

describe('UpdateDirectionAchatComponent', () => {
  let component: UpdateDirectionAchatComponent;
  let fixture: ComponentFixture<UpdateDirectionAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDirectionAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDirectionAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
