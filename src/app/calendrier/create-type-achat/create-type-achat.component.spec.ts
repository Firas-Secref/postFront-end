import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeAchatComponent } from './create-type-achat.component';

describe('CreateTypeAchatComponent', () => {
  let component: CreateTypeAchatComponent;
  let fixture: ComponentFixture<CreateTypeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
