import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'Init';
  destroyable = true;

  constructor() {
    setTimeout(() => {
      this.value = 'DONE';
    }, 5000);
  }

  onDestroyClicked() {
    this.destroyable = !this.destroyable;
  }
}
