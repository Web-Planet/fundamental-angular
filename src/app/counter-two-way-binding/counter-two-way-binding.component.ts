import {ChangeDetectorRef, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-counter-two-way-binding',
  templateUrl: './counter-two-way-binding.component.html',
  styleUrls: ['./counter-two-way-binding.component.scss']
})
export class CounterTwoWayBindingComponent implements DoCheck {
  fruits: string[] = ['Mangga'];
  dataComparator!: string;
  hitValue = 0;

  constructor(private detector: ChangeDetectorRef) {
    this.detector.detach(); // Untuk pemberian hak melakukan pengecekan di component ini

    setTimeout(() => {
      this.dataComparator = 'Alpukat';
      this.fruits.push('Semangka');
    }, 3000);

    setTimeout(() => {
      this.fruits.push('Alpukat');
      detector.markForCheck();
    }, 5000);
  }

  ngDoCheck() {
    this.hitValue++;
    console.log(this.fruits);
    if (this.fruits[this.fruits.length - 1] !== this.dataComparator) {
      this.detector.detectChanges();
    }
  }
}
