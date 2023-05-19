import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjetAccepteComponent } from './create-projet-accepte.component';

describe('CreateProjetAccepteComponent', () => {
  let component: CreateProjetAccepteComponent;
  let fixture: ComponentFixture<CreateProjetAccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjetAccepteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjetAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
