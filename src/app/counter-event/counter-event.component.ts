import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-event',
  templateUrl: './counter-event.component.html',
  styleUrls: ['./counter-event.component.scss']
})
export class CounterEventComponent implements OnInit {
  @Input() clickValue!: number;
  @Output() clickChanger = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increment() {
    this.clickValue++;
    this.clickChanger.emit(this.clickValue);
  }

  decrement() {
    this.clickValue--;
    this.clickChanger.emit(this.clickValue);
  }

}
