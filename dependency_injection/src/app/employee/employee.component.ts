import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers: [EmployeeService],
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees!: Employee[];
  constructor(private emp: EmployeeService){
    this.employees = emp.getEmployee();
  }

  ngOnInit(): void {
  }

}
