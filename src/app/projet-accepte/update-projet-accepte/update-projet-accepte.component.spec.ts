import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjetAccepteComponent } from './update-projet-accepte.component';

describe('UpdateProjetAccepteComponent', () => {
  let component: UpdateProjetAccepteComponent;
  let fixture: ComponentFixture<UpdateProjetAccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjetAccepteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjetAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
