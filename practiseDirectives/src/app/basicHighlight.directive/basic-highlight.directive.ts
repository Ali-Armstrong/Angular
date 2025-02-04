import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef) { }

  ngOnInit(){
    this.elRef.nativeElement.style.backgroundColor = 'green';
    this.elRef.nativeElement.style.color = 'white';
  }

}
