import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirectionAchatComponent } from './create-direction-achat.component';

describe('CreateDirectionAchatComponent', () => {
  let component: CreateDirectionAchatComponent;
  let fixture: ComponentFixture<CreateDirectionAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDirectionAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDirectionAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
