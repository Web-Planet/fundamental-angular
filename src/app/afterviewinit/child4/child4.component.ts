import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements AfterViewInit {
  @ViewChild('headerRef', {read: ElementRef}) headerRef!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.headerRef.nativeElement, 'background-color', 'violet');
    this.renderer.setStyle(this.headerRef.nativeElement, 'width', 'fit-content');
  }
}
