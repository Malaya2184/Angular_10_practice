import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { EmployeesComponent } from './employees/employees.component';
import { NestedEmployeesComponent } from './nested-employees/nested-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSucessComponent,
    AlertDangerComponent,
    EmployeesComponent,
    NestedEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
