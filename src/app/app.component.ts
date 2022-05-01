import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits = 'Apel';
  destroyAble = true;

  constructor() {
    setTimeout(() => {
      this.fruits = 'Pisang';
    }, 3000);
  }

  onButtonClicked() {
    this.destroyAble = !this.destroyAble;
  }
}
