import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() dataValue!: string;
  @Input() clickCounter!: number;
  @Output() clickChanger = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increment() {
    this.clickCounter++;
    this.clickChanger.emit(this.clickCounter);
  }

  decrement() {
    this.clickCounter--;
    this.clickChanger.emit(this.clickCounter);
  }

}
