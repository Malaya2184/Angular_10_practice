import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from './../employee';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit,OnDestroy {

  emps : Employee[]= []
  constructor(private activatedRoute: ActivatedRoute) {
    var lstEmployee: Employee[] = [
      {empId:1, empName: 'malaya', salary: 100000, department:{deptId: 1, deptName: 'D1' } },
      {empId:2, empName: 'nalaya', salary: 10000, department:{deptId: 2, deptName: 'D2' } },
      {empId:3, empName: 'oalaya', salary: 1000, department:{deptId: 3, deptName: 'D3' } },
      {empId:4, empName: 'palaya', salary: 100, department:{deptId: 1, deptName: 'D1' } },
      {empId:5, empName: 'mqalaya', salary: 10, department:{deptId: 2, deptName: 'D2' } },
    ]
    this.emps = lstEmployee;
   }


   selectedEmp!: Employee;
   param: any
  ngOnInit(): void {

    this.param = this.activatedRoute.params.subscribe(value =>{
      console.log(value);
      if(value['empId'] != null){

        this.selectedEmp = this.emps.filter(e => e.empId == value['empId'])[0]
      }
    })
  }
  ngOnDestroy(): void {
    this.param.unsubscribe();
  }

}
