import {ChangeDetectorRef, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-counter-two-way-binding',
  templateUrl: './counter-two-way-binding.component.html',
  styleUrls: ['./counter-two-way-binding.component.scss']
})
export class CounterTwoWayBindingComponent implements DoCheck {
  lifecycleTicks: number = 0;
  oldTheData: string = '';
  data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);

    console.log(this.data);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);
    console.log(this.data);
    if (this.data[this.data.length - 1] !== this.oldTheData) {
      console.log(this.data);
      console.log(this.data[this.data.length - 1]);
      this.changeDetector.detectChanges();
    }
  }
}
