import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListTypeAchatComponent } from './view-list-type-achat.component';

describe('ViewListTypeAchatComponent', () => {
  let component: ViewListTypeAchatComponent;
  let fixture: ComponentFixture<ViewListTypeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListTypeAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListTypeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
