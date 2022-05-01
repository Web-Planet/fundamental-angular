import {AfterContentChecked, Component, ContentChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-anak2',
  templateUrl: './anak2.component.html',
  styleUrls: ['./anak2.component.scss']
})
export class Anak2Component implements AfterContentChecked {
  @ContentChild('headerRef', {read: ElementRef}) headerRef!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  randomRgb() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
    )`;
  }

  ngAfterContentChecked() {
    this.renderer.setStyle(this.headerRef.nativeElement, 'background-color', this.randomRgb());
  }

}
