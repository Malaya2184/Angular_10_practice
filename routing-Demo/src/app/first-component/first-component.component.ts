import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit,OnDestroy {

  constructor(private route: Router) { }
  ngOnDestroy(): void {
    console.log('first component got destroyed');
    
  }

  ngOnInit(): void {
  }

  gosecond(){
    this.route.navigate(['second'])
  }

}
