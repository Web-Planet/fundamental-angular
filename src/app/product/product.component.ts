import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() dataValue!: string;
  hitValue: number = 0;

  constructor() {
  }

  ngOnChanges() {
    console.log('ngOnChanges terpanggil');
    this.hitValue++;
  }

}
