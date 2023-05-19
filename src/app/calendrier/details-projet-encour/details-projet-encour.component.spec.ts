import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProjetEncourComponent } from './details-projet-encour.component';

describe('DetailsProjetEncourComponent', () => {
  let component: DetailsProjetEncourComponent;
  let fixture: ComponentFixture<DetailsProjetEncourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProjetEncourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProjetEncourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
