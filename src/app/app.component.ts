import {Component, OnInit} from '@angular/core';
import {Data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marketplace';
  titleHeader = 'Halo ini adalah header 1';
  passingData = 'Ini data dari parents';
  clickDefault = 10;
  clickTwoWayBinding = 20;
  inputValue!: string;
  myBirthday = new Date(2000, 2, 12);
  color!: string;
  isHide = true;
  // fruits = ['mangga', 'pisang', 'apel', 'jeruk'];
  number!: number;
  fruits: Data[] = [{
    fruit_name: '',
    fruit_color: '',
    fruit_taste: ''
  }];

  ngOnInit() {
    this.fruits = [{
      fruit_name: 'Apel',
      fruit_color: 'Merah',
      fruit_taste: 'Manis'
    }, {
      fruit_name: 'Jeruk',
      fruit_color: 'Jingga',
      fruit_taste: 'Asam'
    }, {
      fruit_name: 'Durian',
      fruit_color: 'Kuning',
      fruit_taste: 'Manis'
    }];
  }

  onChangeInput(event: any) {
    alert(event.target.value);
  }

  onClickButton() {
    alert('Happy learning guys');
  }

  clickChange(event: number) {
    this.clickDefault = event;
  }

  showAlert(text: string) {
    alert(text);
  }

  showMessage() {
    this.isHide = !this.isHide;
  }
}
