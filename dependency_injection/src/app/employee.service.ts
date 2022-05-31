import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { LoggerService } from './logger.service';

@Injectable()
export class EmployeeService {

  constructor(private logger: LoggerService) { }

  getEmployee(): Employee[]{
    this.logger.log('this is spider')
    this.logger.printLog()
    let employees : Employee[]=[
      new Employee(1,"malaya",100000, new Date('2022,10,01')),
      new Employee(2,"nalaya",10000, new Date('2022,10,02')),
      new Employee(3,"oalaya",1000, new Date('2022,10,03')),
      new Employee(4,"palaya",100, new Date('2022,10,04')),
      new Employee(5,"qalaya",10, new Date('2022,10,05'))
    ]
    return employees;

  }
}
