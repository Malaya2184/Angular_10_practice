import { Component, OnInit } from '@angular/core';
import { Employee, Employeetype } from '../employees/employee';

@Component({
  selector: 'app-nested-employees',
  templateUrl: './nested-employees.component.html',
  styleUrls: ['./nested-employees.component.css']
})
export class NestedEmployeesComponent implements OnInit {

  employees: Employee[] = [];
  constructor() {
    this.employees[0]= new Employee(1,'malya', new Date('01/10/1996'),100000,Employeetype.dialy);
    this.employees[1]= new Employee(2,'victim', new Date('01/10/1996'),200000,Employeetype.permanent);
    this.employees[2]= new Employee(3,'roman', new Date('01/10/1996'),300000,Employeetype.retired);
   }

  selectedEmployee!: Employee
  selectEmployee(e:Employee){
    this.selectedEmployee = e;
  }
  ngOnInit(): void {
  }

}
