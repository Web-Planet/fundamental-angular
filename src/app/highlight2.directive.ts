import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackground('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackground('');
  }

  private changeBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.width = 'fit-content';
    this.el.nativeElement.style.cursor = 'pointer';
  }
}
