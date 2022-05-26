import { Component } from '@angular/core';
import {Employee} from './employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customPipes';

  employees: Employee[]=[
    new Employee('malaya', 'mca', 50000),
    new Employee('pralay', 'mba', 40000),
    new Employee('rima', 'bba', 30000),
    new Employee('sima', 'bca', 20000),
    new Employee('bima', 'rba', 10000),
    new Employee('rima', 'kba', 5000)
  ]

  birthdate = new Date('10,01,1996');
}
