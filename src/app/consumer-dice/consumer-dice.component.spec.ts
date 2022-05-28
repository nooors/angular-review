import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDiceComponent } from './consumer-dice.component';

describe('ConsumerDiceComponent', () => {
  let component: ConsumerDiceComponent;
  let fixture: ComponentFixture<ConsumerDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerDiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
