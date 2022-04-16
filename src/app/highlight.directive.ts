import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.mouseHover('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mouseHover('');
  }

  private mouseHover(backgroundColor: string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.width = 'fit-content';
    this.el.nativeElement.style.cursor = 'pointer';
  }

}
