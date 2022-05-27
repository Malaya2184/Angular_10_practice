import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { agePipe } from './age.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { multiplyPipe } from './multiply.pipe';
import { ageCal } from './ageCal.pipe';
import { salaryFilter } from './salaryFilter.pipe';
import { joinPipe } from './join.pipe';

@NgModule({
  declarations: [
    AppComponent,
    multiplyPipe,
    agePipe,
    ageCal,
    salaryFilter,
    joinPipe
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
