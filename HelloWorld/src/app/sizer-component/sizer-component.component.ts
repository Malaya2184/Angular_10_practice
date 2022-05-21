import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer-component',
  templateUrl: './sizer-component.component.html',
  styleUrls: ['./sizer-component.component.css']
})
export class SizerComponentComponent{

  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  resize(i : number){
    this.size +=i;
    if(this.size<8){
      this.size = 8
    }
    if(this.size>40){
      this.size = 40
    }
    this.sizeChange.emit(this.size);
  }

}
