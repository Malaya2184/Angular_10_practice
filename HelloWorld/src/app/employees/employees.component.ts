import { Component, Input, OnInit } from '@angular/core';
import { Employee, Employeetype } from './employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Input()
  emp!: Employee;
  constructor() {this.emp = new Employee(1,'malya', new Date('01/10/1996'),100000,Employeetype.permanent); }
  @Input()
  selected!:boolean;
  ngOnInit(): void {
    
  }

}
