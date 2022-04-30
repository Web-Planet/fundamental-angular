import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements AfterViewInit {
  @ViewChild("headerRef", {read: ElementRef}) headerRef!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.headerRef.nativeElement, 'background-color', 'lightgreen');
  }

}
