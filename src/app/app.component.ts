import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketplace';
  clickDefault = 10;

  titleValue = {
    header: 'Template Syntax Angular',
    method: 'Interpolation Object',
    number: 1,
    secondMethod: 'Interpolation via Property Binding'
  };

  clickValue(event: number) {
    this.clickDefault = event;
  }
}
