import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
    console.log("on init  triggered");
    
  }
  ngOnChanges(): void{
    console.log("on changes  triggered");
    alert('onchanges')
  }
  ngDoCheck(): void{
    console.log("do check  triggered");
  }
  ngAfterContentInit(): void{
    console.log("after content init  triggered");
  }
  ngAfterContentChecked(): void{
    console.log("after content checked  triggered");
  }
  ngAfterViewInit(): void {
    console.log("after view init  triggered");
  }
  ngAfterViewChecked(): void {
    console.log("after content checked  triggered");
  }
  ngOnDestroy(): void{
    console.log("on destroy  triggered");
  }
}
