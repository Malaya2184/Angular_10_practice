import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEmployeeComponent } from './my-employee/my-employee.component';



@NgModule({
  declarations: [
    MyEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MyEmployeeComponent]
})
export class MyEmployeeModule { }
