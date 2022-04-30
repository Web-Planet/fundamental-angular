import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() data !: string;
  tickValue = 0;

  ngOnChanges(): void {
    this.tickValue++;
    console.log('ngOnChanges terpanggil');
  }

}
