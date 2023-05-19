import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListUtilisateursComponent } from './view-list-utilisateurs.component';

describe('ViewListUtilisateursComponent', () => {
  let component: ViewListUtilisateursComponent;
  let fixture: ComponentFixture<ViewListUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListUtilisateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
