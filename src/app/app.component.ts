import {Component, OnInit} from '@angular/core';
import {Data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  color!: string;
  isHide = true;
  number!: number;
  fruits: Data[] = [{
    fruit_name: '',
    fruit_color: '',
    fruit_taste: ''
  }];

  onButtonClick() {
    this.isHide = !this.isHide;
  }

  ngOnInit() {
    this.fruits = [
      {
        fruit_name: 'Apel',
        fruit_color: 'Merah',
        fruit_taste: 'Manis'
      },
      {
        fruit_name: 'Pisang',
        fruit_color: 'Kuning',
        fruit_taste: 'Manis'
      },
      {
        fruit_name: 'Jeruk',
        fruit_color: 'Jingga',
        fruit_taste: 'Asam'
      }
    ];
  }
}
