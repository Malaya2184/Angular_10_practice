import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'dept', component: DepartmentComponent},

  {path:'',
   component: HomeComponent,
   children:[
    {path:'emp/:empId/:empName', component: EmployeeComponent},
  {path:'emp', component: EmployeeComponent},

   ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
