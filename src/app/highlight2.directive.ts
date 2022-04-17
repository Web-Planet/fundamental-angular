import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.colorChanger('lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorChanger('yellow');
  }

  colorChanger(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.width = 'fit-content';
  }

}
