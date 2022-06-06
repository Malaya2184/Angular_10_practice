import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from './eager/eager/eager.component';
import { LazyComponent } from './lazy/lazy/lazy.component';
const routes: Routes = [
  {path: 'lazy',loadChildren:()=>import('./lazy/lazy.module').then(m=>m.LazyModule)},
  {path: 'eager',component:EagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
