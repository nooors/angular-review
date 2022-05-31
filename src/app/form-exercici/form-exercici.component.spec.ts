import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExerciciComponent } from './form-exercici.component';

describe('FormExerciciComponent', () => {
  let component: FormExerciciComponent;
  let fixture: ComponentFixture<FormExerciciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExerciciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExerciciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
