import {Directive, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appDestroy]'
})
export class DestroyDirective implements OnDestroy {

  constructor() {
  }

  ngOnDestroy() {
    console.log('Goodbye All');
  }

}
