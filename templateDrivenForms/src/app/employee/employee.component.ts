import { Component, ViewChild } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{

  @ViewChild('empForm') empFormObj: any
  emp: Employee;

  department = ["sales", "developement", "hr", " accounting"]

  constructor() { 
    this.emp = new Employee(1,"Mlaaya spider", 100000, "accounting" );
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

  newEmployee(){

    alert("form submitted sucessfully")
    this.emp = new Employee(0, '',0,'')
  }

  onSubmit(frm:any){
    // alert(frm.id.value+ " " + frm.name.value)
    alert(this.empFormObj.controls.id.value+ " " + this.empFormObj.controls.name.value)
    // console.log(this.empFormObj);
    // this.newEmployee()
    this.empFormObj.reset();
  }

}
