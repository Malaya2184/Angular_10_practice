import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HttpModule';

  empUrl = 'http://localhost:8080/productrestapi/products/'
  employees: any;
  constructor(private http : HttpClient){


  }
 ngOnInit(){
  this.getEmp().subscribe( (emp: any) => {
    this.employees = emp
  console.log(this.employees);
  })
  
  // console.log(JSON.stringify(this.employees));

}


  getEmp():any{

    return this.http.get(this.empUrl)
  }
 
  

}
