import { Component } from '@angular/core';
import { interval } from 'rxjs';
import {take} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  data!: string;
  constructor(){
    
    let myarr = [1,2,3,4,5]
    let arrayObservable = Observable.create((observer: any) => {
      // observer.next( '1' )
      // observer.next( '2' )
      // observer.next( '3' )
      myarr.forEach(e =>{
        observer.next(e)
      })
  
      observer.complete()
    })

    arrayObservable.subscribe((value: any)=>{
      console.log(value);
      
    })
    // let ob = interval(1000).pipe(take(5)) 
    // ob.subscribe(value => {
    //   console.log('value is :', value);
      
    // })

    let myObservable = interval(1000).pipe(take(5))

    let myObserver = {
      next: (value: any) =>{console.log(value); this.data += value + ',';},
      error : (err: any) => {console.log(err);},
      complete : () => {console.log('completed'); this.data += 'completed'}

      
    }
    myObservable.subscribe(myObserver )
  }
  
}
