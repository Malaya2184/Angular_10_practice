import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
const routes: Routes = [
  {path:'new/first', component:FirstComponentComponent},
  {path:'second', component:SecondComponentComponent},
  {path:'third', component:ThirdComponentComponent},
  // {path:'**', component:ThirdComponentComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
export const routParams = [FirstComponentComponent,SecondComponentComponent,ThirdComponentComponent]
