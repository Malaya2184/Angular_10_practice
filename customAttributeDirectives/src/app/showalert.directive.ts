import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowalert]'
})
export class ShowalertDirective implements OnInit {

  @Input()
  color!: String;
  constructor(private er : ElementRef, private renderer: Renderer2) {
    


    // renderer.listen(er.nativeElement,'mouseover', function(){
    //   er.nativeElement.style.color = 'red'
    //   er.nativeElement.style.cursor = 'pointer'
    //   er.nativeElement.style.fontSize = '30px'
    // })
    // renderer.listen(er.nativeElement,'mouseout', function(){
    //   er.nativeElement.style.color = 'green'
    //   er.nativeElement.style.fontSize = '20px'
    // })
    // renderer.listen(er.nativeElement,'click', function(){
    // alert(er.nativeElement.innerHTML)
    // })
   }
    ngOnInit() {
    this.er.nativeElement.style.color = this.color
    this.er.nativeElement.style.backgroundColor = 'yellow'
  }

   @HostListener('click')
   onMouseClick(){
     alert('host listener mouse clicked')
   }
   @HostListener('mouseover')
   onMouseover(){
     this.er.nativeElement.style.color = 'red'
     this.er.nativeElement.style.fontSize = '30px'
     this.er.nativeElement.style.cursor = 'pointer'
   }
   @HostListener('mouseout')
   onMouseout(){
    this.er.nativeElement.style.color = this.color
    this.er.nativeElement.style.fontSize = '20px'
   }
} 



