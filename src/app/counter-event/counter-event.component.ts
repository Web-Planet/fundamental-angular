import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-event',
  templateUrl: './counter-event.component.html',
  styleUrls: ['./counter-event.component.scss']
})
export class CounterEventComponent implements OnInit {
  @Input() dataValue!: string;
  hitValue = 0;

  ngOnInit() {
    console.log('ngOnInit terpanggil');
    this.hitValue++;
  }
}
