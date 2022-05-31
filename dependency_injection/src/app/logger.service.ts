import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logArr: String [] = []

  log(message: string){
    this.logArr.push(message);
    console.log(message);
    
  }
  printLog(){
    this.logArr.forEach(element => {
      console.log(element);
      
    });
  }
}
