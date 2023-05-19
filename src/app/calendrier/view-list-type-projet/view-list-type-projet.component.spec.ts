import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListTypeProjetComponent } from './view-list-type-projet.component';

describe('ViewListTypeProjetComponent', () => {
  let component: ViewListTypeProjetComponent;
  let fixture: ComponentFixture<ViewListTypeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListTypeProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListTypeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
