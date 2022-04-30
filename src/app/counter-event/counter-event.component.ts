import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-event',
  templateUrl: './counter-event.component.html',
  styleUrls: ['./counter-event.component.scss']
})
export class CounterEventComponent implements OnInit {
  @Input() data!: string;
  tickValue = 0;

  constructor() {
  }

  ngOnInit() {
    this.tickValue++;
    console.log('ngOnInit terpanggil');
  }
}
