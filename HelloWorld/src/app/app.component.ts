import { Component } from '@angular/core';


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
}
