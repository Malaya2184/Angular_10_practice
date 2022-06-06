import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { MyEmployeeModule } from './my-employee/my-employee.module';



@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    MyEmployeeModule
  ],
  exports: [
    EmployeeComponent,MyEmployeeModule]
})
export class EmployeeModule { }
