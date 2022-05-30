import { Component, ReflectiveInjector } from '@angular/core';

import { Student, Adress, Subject } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [
    {provide: Student, useClass: Student},
    {provide: Adress, useClass: Adress},
    {provide: Subject, useClass: Subject}
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency_injection';
  stud: Student;
  

  constructor(stud : Student){
    // var injector = ReflectiveInjector.resolveAndCreate([Student, Adress, Subject])

    // this.stud = injector.get(Student)

    this. stud = stud
  }


}
