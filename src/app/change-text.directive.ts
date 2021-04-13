import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(private eleRef: ElementRef) { 
    this.eleRef.nativeElement.style.background = 'red';
    
  }
  @Input() set appChangeText(condition: String) {
    if(condition!='')
    this.eleRef.nativeElement.style.background = condition;
  }


}
