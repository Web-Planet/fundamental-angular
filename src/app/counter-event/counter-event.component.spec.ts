import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterEventComponent} from './counter-event.component';

describe('CounterEventComponent', () => {
  let component: CounterEventComponent;
  let fixture: ComponentFixture<CounterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterEventComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
