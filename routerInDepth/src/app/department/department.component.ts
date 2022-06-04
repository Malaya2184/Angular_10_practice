import { Component, OnInit } from '@angular/core';
import { Department } from './../department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depts: Department[]=[]
  constructor() {
    var lstDept : Department[]=[
      {deptId: 1, deptName: 'D1'},
      {deptId: 2, deptName: 'D2'},
      {deptId: 3, deptName: 'D3'},
    ];

    this.depts = lstDept;
   }

  ngOnInit(): void {
  }

}
