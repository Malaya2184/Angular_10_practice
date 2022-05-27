import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowalert]'
})
export class ShowalertDirective {

  constructor(private er : ElementRef, private renderer: Renderer2) {

    er.nativeElement.style.color = 'blue'
    er.nativeElement.style.backgroundColor= "yellow"
    renderer.listen(er.nativeElement,'mouseover', function(){
      er.nativeElement.style.color = 'red'
      er.nativeElement.style.cursor = 'pointer'
      er.nativeElement.style.fontSize = '30px'
    })
    renderer.listen(er.nativeElement,'mouseout', function(){
      er.nativeElement.style.color = 'green'
      er.nativeElement.style.fontSize = '20px'
    })
    renderer.listen(er.nativeElement,'click', function(){
    alert("Hello World")
    })
   }

} 
