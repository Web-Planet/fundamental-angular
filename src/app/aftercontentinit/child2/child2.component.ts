import {AfterContentInit, Component, ContentChild, ElementRef, Renderer2} from '@angular/core';
import {Grandchild1Component} from '../grandchild1/grandchild1.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements AfterContentInit {
  @ContentChild('headerRef', {read: ElementRef}) headerRef!: ElementRef;
  @ContentChild(Grandchild1Component, {read: ElementRef}) componentRef!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.renderer.setStyle(this.headerRef.nativeElement, 'background-color', 'lightgreen');
    this.renderer.setStyle(this.headerRef.nativeElement, 'width', 'fit-content');
    this.renderer.setStyle(this.componentRef.nativeElement.children.item(0), 'background-color', 'yellow');
  }

}
