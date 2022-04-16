import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHightlight3]'
})
export class Hightlight3Directive {
  @Input() appHightlight3 !: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.mouseHover(this.appHightlight3);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mouseHover('');
  }

  private mouseHover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.width = 'fit-content';
    this.el.nativeElement.style.cursor = 'pointer';
  }

}
