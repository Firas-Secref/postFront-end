import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListDirectionAchatComponent } from './view-list-direction-achat.component';

describe('ViewListDirectionAchatComponent', () => {
  let component: ViewListDirectionAchatComponent;
  let fixture: ComponentFixture<ViewListDirectionAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListDirectionAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListDirectionAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
