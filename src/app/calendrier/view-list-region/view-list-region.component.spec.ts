import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListRegionComponent } from './view-list-region.component';

describe('ViewListRegionComponent', () => {
  let component: ViewListRegionComponent;
  let fixture: ComponentFixture<ViewListRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
