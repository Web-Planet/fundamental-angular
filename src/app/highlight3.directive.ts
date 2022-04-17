import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight3]'
})
export class Highlight3Directive {
  @Input() appHighlight3!: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.colorChanger(this.appHighlight3);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorChanger('');
  }

  colorChanger(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.width = 'fit-content';
    this.el.nativeElement.style.pointer = 'cursor';
  }
}
