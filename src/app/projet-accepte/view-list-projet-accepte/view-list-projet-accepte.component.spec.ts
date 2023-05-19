import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListProjetAccepteComponent } from './view-list-projet-accepte.component';

describe('ViewListProjetAccepteComponent', () => {
  let component: ViewListProjetAccepteComponent;
  let fixture: ComponentFixture<ViewListProjetAccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListProjetAccepteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListProjetAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
