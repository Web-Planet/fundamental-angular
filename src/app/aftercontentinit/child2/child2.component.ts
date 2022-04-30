import {AfterContentInit, Component, ContentChild, ElementRef, Renderer2} from '@angular/core';
import {GrandChildComponent} from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements AfterContentInit {
  @ContentChild('Child2Header', {read: ElementRef}) headerRef: ElementRef | undefined;
  @ContentChild(GrandChildComponent, {read: ElementRef}) componentRef: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.renderer.setStyle(this.headerRef?.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.componentRef?.nativeElement.children.item(0), 'background-color', 'pink');
    this.renderer.setStyle(this.componentRef?.nativeElement.children.item(1), 'background-color', 'red');
  }

}
