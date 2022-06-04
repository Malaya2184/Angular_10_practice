import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'emp', component: EmployeeComponent},
  {path:'emp/:empId/:empName', component: EmployeeComponent},
  {path:'dept', component: DepartmentComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
