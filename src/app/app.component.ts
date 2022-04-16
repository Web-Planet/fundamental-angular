import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketplace';
  titleHeader = 'Halo ini adalah header 1';
  passingData = 'Ini data dari parents';
  clickDefault = 10;
  clickTwoWayBinding = 20;
  inputValue!: string;
  myBirthday = new Date(2000, 2, 12);
  color!: string;

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
}
