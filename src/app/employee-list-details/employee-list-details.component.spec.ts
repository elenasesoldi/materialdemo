import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListDetailsComponent } from './employee-list-details.component';

describe('EmployeeListDetailsComponent', () => {
  let component: EmployeeListDetailsComponent;
  let fixture: ComponentFixture<EmployeeListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
