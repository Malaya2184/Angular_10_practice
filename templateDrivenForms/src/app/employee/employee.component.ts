import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{

  emp: Employee;

  department = ["sales", "developement", "hr", " accounting"]

  constructor() { 
    this.emp = new Employee(1,"Malaya", 100000, "accounting" );
    // console.log(this.emp);
    //  here new Employee(1,"Malaya", 100000, "accounting" ) returns 
    // {
    //   "id": 1,
    //   "name": "Malaya",
    //   "salary": 100000,
    //   "department": "accounting"
    // } json object

  }

  get dignostic(){return JSON.stringify(this.emp)}


}
