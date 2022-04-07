import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() vote!: number;
  @Output() voteChanger = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increment() {
    this.recalculate(+1);
  }

  decrement() {
    this.recalculate(-1);
  }

  recalculate(delta: number) {
    this.vote = this.vote + delta;
    this.voteChanger.emit(this.vote);
  }
}
