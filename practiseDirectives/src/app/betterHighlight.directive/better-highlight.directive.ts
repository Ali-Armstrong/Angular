import { Directive, ElementRef, Renderer2, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.renderer.setStyle(this.elRef.nativeElement,'color','white')
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.renderer.setStyle(this.elRef.nativeElement,'color','black')
  }

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    //this.renderer.setStyle(this.elRef.nativeElement,'color','white')
  }


}
