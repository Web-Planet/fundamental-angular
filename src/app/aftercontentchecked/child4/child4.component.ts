import {AfterContentChecked, Component, ContentChild, ElementRef, Renderer2} from '@angular/core';
import {GrandChild2Component} from '../grand-child2/grand-child2.component';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements AfterContentChecked {
  @ContentChild('headerRef', {read: ElementRef}) headerRef!: ElementRef;
  @ContentChild(GrandChild2Component, {read: ElementRef}) grandChildComponent!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterContentChecked() {
    this.renderer.setStyle(this.headerRef.nativeElement, 'background-color', this.randomRGB());
    this.renderer.setStyle(this.grandChildComponent.nativeElement.children.item(0), 'background-color', this.randomRGB());
    this.renderer.setStyle(this.grandChildComponent.nativeElement.children.item(1), 'background-color', this.randomRGB());
  }

}
