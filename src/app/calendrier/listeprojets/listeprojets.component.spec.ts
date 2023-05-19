import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprojetsComponent } from './listeprojets.component';

describe('ListeprojetsComponent', () => {
  let component: ListeprojetsComponent;
  let fixture: ComponentFixture<ListeprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprojetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
