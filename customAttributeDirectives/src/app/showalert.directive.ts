import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowalert]'
})
export class ShowalertDirective {

  constructor(private er : ElementRef, private renderer: Renderer2) {

    this.er.nativeElement.style.color = 'blue'
    er.nativeElement.style.backgroundColor= "yellow"
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
    this.er.nativeElement.style.color = 'green'
    this.er.nativeElement.style.fontSize = '20px'
   }
} 
