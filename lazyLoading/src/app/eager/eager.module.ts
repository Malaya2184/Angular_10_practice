import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerRoutingModule } from './eager-routing.module';
import { EagerComponent } from './eager/eager.component';


@NgModule({
  declarations: [
    EagerComponent
  ],
  imports: [
    CommonModule,
    EagerRoutingModule
  ],
  exports: [EagerComponent]
})
export class EagerModule { 
  constructor(){
    console.log('this is eager hhhhh');
  }
}
