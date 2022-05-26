import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { agePipe } from './age.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { multiplyPipe } from './multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    multiplyPipe,
    agePipe
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }