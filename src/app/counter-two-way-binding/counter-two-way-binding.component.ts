import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-two-way-binding',
  templateUrl: './counter-two-way-binding.component.html',
  styleUrls: ['./counter-two-way-binding.component.scss']
})
export class CounterTwoWayBindingComponent implements OnInit {
  @Input() data!: number;
  @Output() dataChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  inc() {
    this.recalculate(+1);
  }

  dec() {
    this.recalculate(-1);
  }

  recalculate(delta: number) {
    this.data = this.data + delta;
    this.dataChange.emit(this.data);
  }
}
