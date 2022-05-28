import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDutyComponent } from './table-duty.component';

describe('TableDutyComponent', () => {
  let component: TableDutyComponent;
  let fixture: ComponentFixture<TableDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDutyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
