import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.width = 'fit-content';
  }

}
