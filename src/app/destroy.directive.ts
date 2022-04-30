import {Directive, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appDestroy]'
})
export class DestroyDirective  implements OnDestroy {

  ngOnDestroy() {
    console.log('Goodbye World')
  }

}
