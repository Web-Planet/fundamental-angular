import {AfterViewChecked, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-anak4',
  templateUrl: './anak4.component.html',
  styleUrls: ['./anak4.component.scss']
})
export class Anak4Component implements AfterViewChecked {
  @ViewChild('headerRef', {read: ElementRef}) headerRef!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  randomRgb() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
    )`;
  }

  ngAfterViewChecked() {
    this.renderer.setStyle(this.headerRef.nativeElement, 'color', this.randomRgb());
  }

}
