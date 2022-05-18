import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedEmployeesComponent } from './nested-employees.component';

describe('NestedEmployeesComponent', () => {
  let component: NestedEmployeesComponent;
  let fixture: ComponentFixture<NestedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
