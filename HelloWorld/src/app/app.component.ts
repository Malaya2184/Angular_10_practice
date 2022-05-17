import { Component } from '@angular/core';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spider';
  myName = "Malaya kumar swain"
  show = true
  toggle(){
    if(this.show){
      this.show = false
    }
    else{
      this.show=true
    }
    }
  subject = ["math", "science", "biology", "physics", "chemistry"]
  selectedSub = this.subject[2]

  alert = AlertSucessComponent

  switchAlert(){
    if(this.alert == AlertSucessComponent){
      this.alert = AlertDangerComponent
    }
    else[
      this.alert = AlertSucessComponent
    ]
  }
}
